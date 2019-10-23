import gql from "graphql-tag";

const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export { getAuthorsQuery };
