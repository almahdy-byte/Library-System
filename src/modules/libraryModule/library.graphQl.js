import { GraphQLList, GraphQLString } from "graphql";
import { addLibraryBranch, getAllLibraryBranches, LibraryType } from "./library.graphQl.controller.js";

export const libraryMutation ={
    addLibraryNewBranch:{
        type:LibraryType ,
    args:{
        libraryLocation:{
            type:GraphQLString
        },
        libraryName:{
            type:GraphQLString
        }
    },
    resolve:addLibraryBranch
}
}

export const libraryQuery ={
    getAllLibraryBranches:{
        type:new GraphQLList(LibraryType) ,
        resolve:getAllLibraryBranches
}
}

