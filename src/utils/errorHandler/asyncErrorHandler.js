import { StatusCodes } from "http-status-codes"

const asyncErrorHandler = (fn)=>{
    return(async (req , res ,next)=>{
        fn(req , res , next).catch(error=> next(new Error( error + " " || 'Something went wrong', {cause:StatusCodes.INTERNAL_SERVER_ERROR})))
    })
}