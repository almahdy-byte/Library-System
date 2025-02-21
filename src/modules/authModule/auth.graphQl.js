import { GraphQLNonNull, GraphQLString } from "graphql";
import { LoginType, UserRegisterType } from "./auth.graphQl.types.js";
import * as authServices from "./auth.graphql.controller.js";

export const authMutation = {
    register:{
        type:UserRegisterType,
        args:{
                userName:{
                    type: new GraphQLNonNull(GraphQLString)
                },
                email:{
                    type: new GraphQLNonNull(GraphQLString)
                },
                phone:{
                    type: new GraphQLNonNull(GraphQLString)
                },
                password:{
                    type: new GraphQLNonNull(GraphQLString)
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
                type: new GraphQLNonNull(GraphQLString),
            },
            password:{
                type: new GraphQLNonNull(GraphQLString),
            }
        },
        resolve:authServices.login
    }
}