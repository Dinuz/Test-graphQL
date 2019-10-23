import {BookType} from "@/schema/types/book"
import {GraphQLID, GraphQLNonNull, GraphQLString} from "graphql"
import {resolveMutationAddBook} from "@/schema/resolvers/book"


const addBook = {
  type: BookType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: new GraphQLNonNull(GraphQLString)},
    authorId: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: resolveMutationAddBook
}

export {addBook}
