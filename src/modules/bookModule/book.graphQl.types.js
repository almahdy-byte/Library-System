import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export const BookType = new GraphQLObjectType({
    name:'BookType',
    fields:{
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
        id:{
            type:GraphQLID
        }
    }
})

export const BorrowedBookType = new GraphQLObjectType({
    name:'BorrowedBookType',
    fields:{
        title:{
            type:GraphQLString
        },
        availableCopies:{
            type:GraphQLInt
        } ,
        bookId:{
            type:GraphQLID
        }
    }
})

