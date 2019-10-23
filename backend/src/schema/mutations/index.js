import * as authorMutation from '@/schema/mutations/author'
import * as bookMutation from '@/schema/mutations/book'
import {GraphQLObjectType} from "graphql"


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...bookMutation,
    ...authorMutation
  }
});

export default Mutation
