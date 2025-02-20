import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { BorrowedBookType } from "../bookModule/book.graphQl.types.js";
import * as userServices from './user.graphQl.controller.js'

export const userMutation ={
    borrowBook:{
        type:BorrowedBookType,
        args:{
            authorization :{
                type:GraphQLString
            },
            bookId:{
                type:GraphQLID
            },
            dueDate:{
                type:GraphQLString
            }
        }, 
        resolve:userServices.borrowBook
    } , 
    deleteUser:{
        type:GraphQLString,
        args:{
            authorization :{
                type:GraphQLString
            },
            userId:{
                type:GraphQLID
            },
        },
        resolve:userServices.deleteUser
    } , 
    markBookAvailable:{
        type: GraphQLString, 
        args:{
            authorization :{
                type:GraphQLString
            },
            bookId:{
                type:GraphQLID
            },
            numOfCopies:{
                type:GraphQLInt
            }
        },
        resolve:userServices.markBookAvailable
    }
}