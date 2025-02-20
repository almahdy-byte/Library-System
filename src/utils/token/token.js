import jwt from "jsonwebtoken"
import { Role, userModel } from "../../DB/models/user.model.js";
 //sign token
export const sign = async(payload = {} , signature = process.env.USER_ACCESS_TOKEN, expiresIn = "1w")=>  await jwt.sign(payload , signature , {expiresIn})
 // verify
export const verify =async(token,signature = process.env.USER_ACCESS_TOKEN)=>await jwt.verify(token , signature);


export const createToken = async(role , payload = {})=>{
    let signature ;
    switch (role) {
        case Role.user:
            signature = process.env.USER_ACCESS_TOKEN
            break;
            case Role.admin:
            signature = process.env.ADMIN_ACCESS_TOKEN
            break;
        default:
            break;
    }
    return await sign(payload , signature);
}
export const decodeToken =async (authorization)=>{
    if(!authorization) throw new Error('please send a token');
    const parts =  authorization.split(' ');
    if(parts.length !== 2 ) 
            throw new Error('invalid token formate' );
    const [barer , token] = parts
    if(!barer || !token || !Object.values(Role).includes(barer))
            throw new Error('invalid token');
    let signature ;
    switch (barer) {
        case Role.user:
            signature = process.env.USER_ACCESS_TOKEN
            break;
            case Role.admin:
            signature = process.env.ADMIN_ACCESS_TOKEN
            break;
        default:
            break;
    }
    return await verify(token , signature);
}
