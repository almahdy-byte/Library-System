import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { BookType } from "../bookModule/book.graphQl.types.js";
import { booksObj } from "../libraryModule/library.graphQl.controller.js";

export const UserType = new GraphQLObjectType({
        name:'UserType',
        fields:{
            userName:{
                type:GraphQLString
            },
            email:{
                type:GraphQLString
            },
            phone:{
                type:GraphQLString
            },
            password:{
                type:GraphQLString
            },
            id:{
                type:GraphQLID
            } ,
            role:{
                type:GraphQLString
            } , borrowedBooks:{
                type:new GraphQLList(BookType)
            }
        }
});
export const UserRegisterType = new GraphQLObjectType({
    name:'UserRegisterType',
    fields:{
        message:{
            type:GraphQLString
        },
        user:{
            type:UserType
        }
    }
})

export const LoginType = new GraphQLObjectType({
    name:'LoginType',
    fields:{
        message:{
            type:GraphQLString
        },
        token:{
            type:GraphQLString
        }
    }
})