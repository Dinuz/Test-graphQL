import {GraphQLObjectType} from "graphql"
import * as bookQuery from "@/schema/queries/book"
import * as authorQuery from "@/schema/queries/author"


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...bookQuery,
    ...authorQuery
  }
});

export default RootQuery
