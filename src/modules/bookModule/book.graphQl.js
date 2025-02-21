import {  BookType } from "./book.graphQl.types.js";
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import * as bookServices from './book.graphQl.controller.js'


export const bookMutation = {
    addBook:{
        type:BookType,
        args:{
            title:{
                type:GraphQLString
            },
            author:{
                type:GraphQLString
            },
            genre:{
                type:GraphQLString
            },
            publishYear:{
                type:GraphQLInt
            },
            availableCopies:{
                type:GraphQLInt
            } ,
            libraryId :{
                type : GraphQLID
            }
        },
        resolve:bookServices.addBook
    }
}


export const bookQuery = {
    getAllBooks:{
        type:new GraphQLList(BookType),
        resolve:bookServices.getAllBooks
    },
    getBookById:{
        type:BookType,
        args:{
            bookId :{
                type:GraphQLID
            }
        },
        resolve:bookServices.getBookById
    },
    getUnreturnedBooks:{
        type:new GraphQLList(BookType),
        resolve:bookServices.getUnreturnedBooks
    },
    
}