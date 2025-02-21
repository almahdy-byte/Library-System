import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { authMutation } from "./modules/authModule/auth.graphQl.js";
import { bookMutation, bookQuery } from "./modules/bookModule/book.graphQl.js";
import { userMutation, userQuery } from "./modules/userModule/user.graphQl.js";
import { libraryMutation, libraryQuery } from "./modules/libraryModule/library.graphQl.js";

export const schema = new GraphQLSchema({
    query : new GraphQLObjectType({
        name : 'Query',
        fields:{
            ...bookQuery,
            ...libraryQuery,
            ...userQuery
        }
    }),
    mutation:new GraphQLObjectType({
        name:'Mutation',
        fields:{
            ...authMutation,
            ...bookMutation,
            ...userMutation,
            ...libraryMutation
        }
    })
}
)