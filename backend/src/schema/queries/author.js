import {AuthorType} from "@/schema/types/author"
import {GraphQLID, GraphQLList} from "graphql"
import {resolveQueryAuthor, resolveQueryAuthors} from "@/schema/resolvers/author"


const author = {
  type: AuthorType,
  args: {id: {type:GraphQLID}},
  resolve: resolveQueryAuthor
}

const authors = {
  type: new GraphQLList(AuthorType),
  resolve: resolveQueryAuthors
}

export {author, authors}
