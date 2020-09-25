<template>
  <div class="bookitem">
    <div>
      <img
        v-bind:src="book.imageUrl"
        v-bind:alt="book.title"
        class="h-24 w-24 rounded-full mx-auto"
      />
    </div>
    <div>
      <h1>
        {{ book.title }}
      </h1>
      <h2>
        {{ book.author }}
      </h2>
    </div>
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
  max-height: 200px;
  margin: 20px 0;
  padding: 20px 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
