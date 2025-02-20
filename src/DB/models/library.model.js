import { model, Schema } from "mongoose";


const librarySchema = new Schema({
    name :{
        type:String,
        required:true
    },
    location : {
        type:String,
        required:true
    },
    books:[{
            bookId : {
            type:Types.ObjectId,
            ref:'Books'
        } 
    }]
})

export const libraryModel = model('Library' , librarySchema)