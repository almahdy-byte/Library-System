import { StatusCodes } from "http-status-codes";
import { Role, userModel } from "../../DB/models/user.model.js";
import { hash } from "../../utils/hash/hash.js";
import { encrypt } from "../../utils/crypt/encrypt.js";
import { compare } from "../../utils/hash/compare.js";
import { createToken, sign } from "../../utils/token/token.js";
import { validation } from "../../middleWare/validation.middleWare.js";
import { logInValidation, registerValidation } from "./auth.validation.js";


export const register = async(_ , args)=>{
    const {userName , email , password , phone , role} = args;
    await validation(args , registerValidation);
    const isExist = await userModel.findOne({
        email 
    })
    if(isExist) throw new Error('User Already Exist' , {cause:StatusCodes.BAD_REQUEST});
    const user = await userModel.create({
        userName ,
        email ,
        password : await hash(password),
        phone: await encrypt(phone),
        role : role || Role.user
    })
    return {
        message:'done' , 
        user
    }
}

export const login = async(_,args)=>{
    const{email , password} = args;
    validation(args , logInValidation)
    const user = await userModel.findOne({
        email
    })
    console.log(user);
    
    if(!user) throw new Error('User Not Found ' , {cause:StatusCodes.NOT_FOUND});
    if(!compare(password , user.password)) throw new Error('Wrong Email pr Password');

    const token = await createToken(user.role , {id:user._id});
    return {
        message : 'Login Successfully', 
        token 
    }
}