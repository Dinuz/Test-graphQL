<template>
  <div>
    <div v-if="$apollo.queries.books.loading">Loading...</div>
    <ul id="book-list" v-for="book in books" :key="book.id">
      <li @click="setBookDetails(book.id)">{{ book.name }}</li>
    </ul>
    <BookDetails :selected="selected" />
  </div>
</template>

<script>
//import gql from "graphql-tag";
import { getBooksQuery } from "@/graphql/queries/book";
import BookDetails from "@/components/BookDetails";

export default {
  name: "BookList",
  data() {
    return {
      selected: null,
      // Initialize your apollo data
      books: {}
    };
  },
  components: {
    BookDetails
  },
  //mounted: function() {
  //      console.log(this.books) // Calls the method before page loads
  //  },
  methods: {
    setBookDetails: function(bookId) {
      this.selected = bookId;
      console.log(this.selected);
    }
  },
  apollo: {
    books: {
      query: getBooksQuery
    }
  }
};
</script>

<style scoped>
#book-list {
  padding: 0;
}
#book-list li {
  display: inline-block;
  float: left;
  margin: 12px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #880e4f;
}
</style>
