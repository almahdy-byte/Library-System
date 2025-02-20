import { model, Schema } from "mongoose";


const bookSchema = new Schema({
    title:{
        type:String,
        required : true
    } , 
    author :{
        type:String , 
        required:true,
    } ,
    genre:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        required:true
    },
    availableCopies:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})


export const bookModel = model('Books' , bookSchema);