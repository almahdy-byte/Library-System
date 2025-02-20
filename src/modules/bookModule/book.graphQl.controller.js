import { bookModel } from "../../DB/models/book.model.js";

export const addBook =async(_ , args)=>{
const {title , author , publishYear , genre , availableCopies} = args;
const book = await bookModel.create({
    title , author , publishYear , genre , availableCopies
})
return{
    title , author , publishYear , genre , availableCopies , id:book._id
}}