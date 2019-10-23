import {AuthorType} from "@/schema/types/author"
import {GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql"
import {resolveMutationAddAuthor} from "@/schema/resolvers/author"

const addAuthor = {
  type: AuthorType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: new GraphQLNonNull(GraphQLInt)}
  },
  resolve: resolveMutationAddAuthor
}

export {addAuthor}
