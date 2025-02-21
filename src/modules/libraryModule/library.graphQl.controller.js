import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql"
import { libraryModel } from "../../DB/models/library.model.js"
export const booksObj = new GraphQLObjectType({
name:'booksObj',
fields:{
    title :{
        type:GraphQLString
    },
    author:{
        type:GraphQLString
    }
}
})
export const LibraryType = new GraphQLObjectType({
    name:'LibraryType',
    fields:{
        name:{
            type:GraphQLString
        },
        location:{
            type:GraphQLString,
        },
        id:{
            type:GraphQLID
        },
        books:{
            type: new GraphQLList(booksObj)
        }
    }
})





export const addLibraryBranch = async(_,args)=>{
    const {libraryLocation , libraryName} = args
    const library = await libraryModel.create({
        location:libraryLocation , name : libraryName
    })
    return library 
}
export const getAllLibraryBranches = async(_,args)=>{
    const branches = await libraryModel.find({}).populate({
        path:'books',
        select:'title author -_id'
    })
    return branches
}