import gql from "graphql-tag";

const getBooksQuery = gql`
  query {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { getBooksQuery, getBookQuery };
