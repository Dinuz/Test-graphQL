import {GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {BookType} from "@/schema/types/book";
import {resolveTypeBooks} from "@/schema/resolvers/book";

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve: resolveTypeBooks
    }
  })
});

export {AuthorType}
