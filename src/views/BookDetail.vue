<template>
  <div id="page" v-if="currentBook.title">
    <BookItemDetail :book="currentBook" />

    <a
      style="cursor: pointer; text-decoration: underline"
      v-on:click="navigate()"
    >
      <button class="btn btn-blue">Go back</button></a
    >
  </div>
</template>

<script>
import router from "../router";
import BookItemDetail from "../components/BookItemDetail";
import { booksData } from "../assets/constants";

export default {
  name: "Detail",
  components: {
    BookItemDetail,
  },
  props: ["book"],
  data() {
    return {
      id: 0,
      currentBook: {},
      allBooks: booksData,
    };
  },
  created() {
    this.id = +this.$route.params.id;
    this.currentBook = booksData.find((book) => book.id === this.id);
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  },
};
</script>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-600;
}
</style>

