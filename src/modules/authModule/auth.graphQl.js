import { GraphQLString } from "graphql";
import { LoginType, UserRegisterType } from "./auth.graphQl.types.js";
import * as authServices from "./auth.graphql.controller.js";

export const authMutation = {
    register:{
        type:UserRegisterType,
        args:{
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
                role:{
                    type:GraphQLString
                }
        },
        resolve:authServices.register
    } , 
    login:{
        type:LoginType,
        args:{
            email:{
                type:GraphQLString,
            },
            password:{
                type:GraphQLString,
            }
        },
        resolve:authServices.login
    }
}