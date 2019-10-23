import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";
import {AuthorType} from "@/schema/types/author";
import {resolveTypeAuthor} from "@/schema/resolvers/author"

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve: resolveTypeAuthor
    }
  })
});

export {BookType}
