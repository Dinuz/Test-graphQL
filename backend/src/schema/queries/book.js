import {BookType} from "@/schema/types/book"
import {GraphQLID, GraphQLList} from "graphql"
import {resolveQueryBook, resolveQueryBooks} from "@/schema/resolvers/book"


const book = {
  type: BookType,
  args: {id: {type:GraphQLID}},
  resolve: resolveQueryBook
}

const books = {
  type: new GraphQLList(BookType),
  resolve: resolveQueryBooks
}


export {book, books}
