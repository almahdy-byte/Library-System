import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

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