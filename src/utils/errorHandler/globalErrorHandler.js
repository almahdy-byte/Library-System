import { StatusCodes } from "http-status-codes"

export const globalErrorHandler = async(error, req , res , next )=>{
return res.status(error.cause || 500).json({Error : error+" " || "something went wrong"});
} 