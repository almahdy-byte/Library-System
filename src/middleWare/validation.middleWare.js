import Joi from "joi";
import { Role } from "../DB/models/user.model.js";



const phoneValidation = (phone , helper)=>{
    const phoneRegex = /^01[0125][0-9]{8}$/;
    return phoneRegex.test(phone) ? value : helper.message('enter a valid number')
}
export const generalValidation = {
userName : Joi.string(),
password : Joi.string().min(6),
email : Joi.string().email(),
phone : Joi.string().custom(phoneValidation),
role:Joi.string().valid(...Object.values(Role))
}


export const validation = (args , schema)=>{
return ()=>{
    const data = {
    ...args
    }
    const result = schema.validate(data); 
    let errors = [];
    if(result.error){
        errors.push(result.error.details[0].message)
        throw new Error((errors) , {cause:StatusCodes.BAD_REQUEST})
    }
    return
}
}