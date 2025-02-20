import { BookType } from "./book.graphQl.types.js";
import { GraphQLInt, GraphQLString } from "graphql";
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
            } 
        },
        resolve:bookServices.addBook
    }
}