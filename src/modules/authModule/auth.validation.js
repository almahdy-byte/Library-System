import Joi from "joi"
import { generalValidation } from "../../middleWare/validation.middleWare.js"

export const registerValidation = Joi.object({
    userName:generalValidation.userName.required(),
    password : generalValidation.password.required(),
    email : generalValidation.email.required(),
    phone:generalValidation.phone.required(),
    role : generalValidation.role,
})

export const logInValidation = Joi.object({
    password : generalValidation.password.required(),
    email : generalValidation.email.required(),

})