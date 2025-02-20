import { StatusCodes } from "http-status-codes";
import { decodeToken } from "../utils/token/token.js"
import { userModel } from "../DB/models/user.model.js";

export const auth = async(authorization)=>{
    const decodedToken = await decodeToken(authorization);
    const user = await userModel.findOne({
        _id : decodedToken.id
    })
    if(!user)
        throw new Error('user not found' , {causer:StatusCodes.NOT_FOUND})
    return user;
}