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
      <h1>
        {{ book.author }}
      </h1>
      <h1>{{ book.price }} euro</h1>
    </div>
    <div>
      <router-link :to="{ name: 'Detail', params: { id: book.id } }"
        ><button class="btn btn-blue">See details</button>
      </router-link>
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
