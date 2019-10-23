<template>
  <div id="book-details">
    <div v-if="this.book">
      <h2>{{ this.book.name }}</h2>
      <p>{{ this.book.genre }}</p>
      <p>{{ this.book.author.name }}</p>
      <p>All books by this author:</p>
      <ul
        class="other-books"
        v-for="book in this.book.author.books"
        :key="book.id"
      >
        <li>{{ book.name }}</li>
      </ul>
    </div>
    <div v-else>No book selected...</div>
  </div>
</template>

<script>
import { getBookQuery } from "@/graphql/queries/book";

export default {
  name: "BookDetails",
  data() {
    return {
      // Initialize your apollo data
      book: null
    };
  },
  props: {
    selected: {
      type: String
    }
  },
  apollo: {
    book: {
      query: getBookQuery,
      // Reactive parameters
      variables() {
        // Use vue reactive properties here
        return {
          id: this.selected
        };
      }
    }
  },
  methods: {
    displayBookDetails: function() {}
  }
};
</script>

<style scoped>
#book-details {
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: #ad1457;
  padding: 30px;
  overflow: auto;
  box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: #fff;
}
</style>
