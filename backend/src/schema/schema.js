import {
  graphql,
  GraphQLSchema,
} from 'graphql';

import Mutation from "@/schema/mutations";
import RootQuery from "@/schema/queries";


const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

export {schema};
