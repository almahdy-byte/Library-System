import  { model, Schema, Types } from "mongoose";
export const Role={
    admin:'admin',
    user:'user'
}
Object.freeze(Role)
const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
    } ,
    email :{
        type:String,
        required:true,
        unique:true
    },
    phone :{
        type:String,
        required:true,
    },
    password :{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:Object.values(Role),
        default:'user'
    },
    borrowedBooks:[{
        type:Types.ObjectId,
        ref:'Books'
    }]
},)

export const userModel = model('Users' , userSchema);