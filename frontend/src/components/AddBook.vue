<template>
  <form id="add-book" @submit.prevent="submitForm">
    <div class="field">
      <label>Book name:</label>
      <input type="text" v-model="book.name" />
    </div>

    <div class="field">
      <label>Genre:</label>
      <input type="text" v-model="book.genre" />
    </div>

    <div class="field">
      <label>Author:</label>
      <select v-model="book.authorId">
        <option>Select author</option>
        <option v-if="$apollo.queries.authors.loading">Loading...</option>
        <option v-for="author in authors" :key="author.id" :value="author.id">{{
          author.name
        }}</option>
      </select>
    </div>

    <button>+</button>
  </form>
</template>

<script>
import { getAuthorsQuery } from "@/graphql/queries/author";
import { addBookMutation } from "@/graphql/mutations/book";
import { getBooksQuery } from "@/graphql/queries/book";

export default {
  name: "AddBook",
  data() {
    return {
      book: {
        name: "",
        genre: "",
        authorId: ""
      },
      //name: "",
      //genre: "",
      //authorId: "",
      // Initialize your apollo data
      authors: {}
    };
  },
  apollo: {
    authors: {
      query: getAuthorsQuery
    }
  },
  methods: {
    //onChange: function(event) {
    //  console.log(event.target.value);
    //  console.log(this.name)
    //},
    submitForm: function() {
      //console.log(this.book);
      this.$apollo.mutate({
        // Query
        mutation: addBookMutation,
        // Parameters
        variables: {
          name: this.book.name,
          genre: this.book.genre,
          authorId: this.book.authorId
        },
        // Update the cache with the result
        // The query will be updated with the optimistic response
        // and then with the real result of the mutation
        update: (store, { data: { addBook } }) => {
          // Read the data from our cache for this query.
          const data = store.readQuery({ query: getBooksQuery });
          // Add our tag from the mutation to the end
          data.books.push(addBook);
          // Write our data back to the cache.
          store.writeQuery({ query: getBooksQuery, data });
        }
      });
    }
  }
};
</script>

<style scoped>
form {
  background: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;
}

form .field {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

form label {
  text-align: right;
  padding: 6px;
}

form select,
form input {
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
}

form button {
  color: #fff;
  font-size: 2em;
  background: #ad1457;
  border: 0;
  text-align: center;
  padding: 0 10px 4px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
