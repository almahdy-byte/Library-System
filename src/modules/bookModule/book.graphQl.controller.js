import { StatusCodes } from "http-status-codes";
import { bookModel } from "../../DB/models/book.model.js";
import { borrowedBookModel } from "../../DB/models/borrowedBook.model.js";
import { libraryModel } from "../../DB/models/library.model.js";

export const addBook =async(_ , args)=>{
const {title , author , publishYear , genre , availableCopies , libraryId} = args;
const library = await libraryModel.findOne({
    _id : libraryId
})
if(!library)
    throw new Error('this Branch Not found' , {cause :StatusCodes.NOT_FOUND}) 
const book = await bookModel.create({
    title , author , publishYear , genre , availableCopies
})
library.books.push({
    _id:book._id
})
await library.save();
return{
    title , author , publishYear , genre , availableCopies , id:book._id
}}

export const getAllBooks = async(_,args)=>{

    const books = await bookModel.find({isDeleted : false });
    if(!books) throw new Error('there is no book in library' , {cause:StatusCodes.NOT_FOUND})
    return books
}
export const getBookById = async(_,args)=>{
    const {bookId} = args
    const book = await bookModel.findOne({isDeleted : false  , _id : bookId});
    if(!book) throw new Error('Book Not found' , {cause:StatusCodes.NOT_FOUND})
    return book
}
export const getUnreturnedBooks = async(_,args)=>{

    const books = await borrowedBookModel.find({returned:false });
    if(books.length==0) throw new Error("There are no unreturned books" , {cause:StatusCodes.NOT_FOUND})
    return books
}