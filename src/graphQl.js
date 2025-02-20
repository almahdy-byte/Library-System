import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { authMutation } from "./modules/authModule/auth.graphQl.js";
import { bookMutation } from "./modules/bookModule/book.graphQl.js";
import { userMutation } from "./modules/userModule/user.graphQl.js";

export const schema = new GraphQLSchema({
    query : new GraphQLObjectType({
        name : 'Query',
        fields:{
            Hello:{
                type:GraphQLString,
                resolve:function(){
                    return 'Hello'
                }
            }
        }
    }),
    mutation:new GraphQLObjectType({
        name:'Mutation',
        fields:{
            ...authMutation,
            ...bookMutation,
            ...userMutation
        }
    })
}
)