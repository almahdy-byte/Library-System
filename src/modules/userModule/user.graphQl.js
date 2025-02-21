import { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { BookType, BorrowedBookType } from "../bookModule/book.graphQl.types.js";
import * as userServices from './user.graphQl.controller.js'
import { UserType } from "../authModule/auth.graphQl.types.js";
import { booksObj } from "../libraryModule/library.graphQl.controller.js";

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


export const userQuery = {
    getUsers:{
        // type:new GraphQLList(UserType),
        type:new GraphQLList(UserType) ,
        resolve:userServices.getUsers
    }
    
}