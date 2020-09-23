<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button class="btn btn-blue">
    Button
  </button>
</template>

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
