<template>
  <div id="app">
    <h1>Ninja's Reading List</h1>
    <BookList />
    <AddBook />
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import AddBook from "@/components/AddBook";

export default {
  name: "app",
  components: {
    BookList,
    AddBook
  }
  //apollo: {
  //
  //}
};
</script>

<style lang="scss">
body {
  background-color: #eeeeee;
}

#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  padding: 0;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
  //background-color: #eeeeee;
}
#app h1 {
  color: #444;
  text-align: center;
}
</style>
