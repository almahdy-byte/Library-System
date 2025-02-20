import { StatusCodes } from "http-status-codes";
import { bookModel } from "../../DB/models/book.model.js";
import { auth } from "../../middleWare/auth.middleWare.js";
import { borrowedBookModel } from "../../DB/models/borrowedBook.model.js";
import { Role, userModel } from "../../DB/models/user.model.js";
import { allowTo } from "../../middleWare/authorization.MiddleWare.js";


export const borrowBook = async(_,args)=>{
    const{ authorization , bookId , dueDate} = args;
    const user = await auth(authorization);
    const book = await bookModel.findOne({
        _id:bookId , isDeleted : false 
    })
    if(!book) 
        throw new Error('Book Not Found' , {cause:StatusCodes.NOT_FOUND});
    if(book.availableCopies===0) 
        throw new Error('Book Not available' , {cause:StatusCodes.BAD_REQUEST});
    book.availableCopies-=1;
    const borrowBook = await borrowedBookModel.create({
            userId : user._id , 
            bookId ,
            dueDate:dueDate ? new Date(dueDate) : Date.now() * 2 * 24 * 60 *60 * 1000
        });
        await book.save()
    return{
        bookId,
        availableCopies : book.availableCopies , 
        title : book.title
    }
}

export const deleteUser = async(_,args)=>{
    const {authorization , userId} = args;
    const user = await auth(authorization);
    
    const targetUser = await userModel.findOne({
        _id : userId
    })
    if(!targetUser)
        throw new Error('user not found' , {causer:StatusCodes.NOT_FOUND})
    if(user._id.toString() !== userId.toString() &&  user.role !== Role.admin)
        throw new Error('you are not allowed to delete this user' , {cause:StatusCodes.BAD_REQUEST})
    await targetUser.deleteOne();
    return 'user deleted successfully'
    }
export const markBookAvailable =async(_,args)=>{
    const{ authorization , bookId , numOfCopies } = args;
    const user = await auth(authorization);
    
    allowTo([Role.admin] , user.role) ;
    const book = await bookModel.findOne({
        _id:bookId , isDeleted : false
    })
    if(!book) 
        throw new Error('Book Not Found Please add This book First' , {cause:StatusCodes.NOT_FOUND});
    book.availableCopies += numOfCopies;
        await book.save()
    return " Book is now available for borrowing"
}