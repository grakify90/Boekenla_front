<template>
  <div class="container mx-auto sm:w-11/12 md:w-9/12 lg:w-1/2">
    <div v-bind:key="book.id" v-for="book in books">
      <BookItem v-bind:book="book" />
    </div>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";

export default {
  name: "Books",
  components: {
    BookItem,
  },
  props: ["books"],
};
</script>

<style scoped></style>
