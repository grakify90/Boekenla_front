<template>
  <div class="bookitem">
    <p>
      {{ book.title }}
    </p>
    <img
      v-bind:src="book.url"
      v-bind:alt="book.title"
      class="h-16 w-16 rounded-full mx-auto"
    />
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"],
};
</script>

<style scoped>
.bookitem {
  margin: 20px 0;
  padding: 50px 0;
  background-color: blanchedalmond;
}
</style>
