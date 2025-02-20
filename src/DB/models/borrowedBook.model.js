import { model, Schema, Types } from "mongoose";


const borrowedBookSchema = new Schema({
    userId:{
        type:Types.ObjectId,
        required:true,
    },
    bookId:{
        type:Types.ObjectId,
        required:true,
    },
    borrowedAt: {
        type: Date,
        required: true,
        default: Date.now
        },
    dueDate: {
        type: Date,
        required: true
    },
    returned: {
        type: Boolean,
        default: false  
    }
})


export const borrowedBookModel = model("BorrowedBooks" ,borrowedBookSchema );