<template>
  <div>
    <h1>{{ book.title }}</h1>
    <h1>{{ book.author }}</h1>
    <h1>{{ book.description }}</h1>
    <h1>{{ book.genre }}</h1>
    <h1>{{ book.price }} euro</h1>
    <h1>Bidding allowed: {{ book.allowBid }}</h1>
    <img v-bind:src="book.imageUrl" />
  </div>
</template>

<script>
export default {
  name: "BookItemDetail",
  props: ["book"],
};
</script>

<style scoped>
.bookitem {
  max-height: 200px;
  margin: 20px 0;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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
