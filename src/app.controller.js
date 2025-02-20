
import cors from 'cors'
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './utils/errorHandler/globalErrorHandler.js';
import { DBconnection } from './DB/connection.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './graphQl.js';



export const bootstrap = async(app , express)=>{
    app.use(express.json());
    app.use(cors());
    
    await DBconnection();
    
    
    app.use('/graphQl' , createHandler({schema}))


    app.use('*' , (req , res , next)=>{
        return res.status(StatusCodes.NOT_FOUND).json({message:'page not found'});
    })
    app.use(globalErrorHandler);
}