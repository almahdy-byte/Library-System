import { model, Schema, Types } from "mongoose";


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
            type:Types.ObjectId,
            ref:'Books'
    }]
})


export const libraryModel = model('Library' , librarySchema)