<template>
  <div>
    <p>
      {{ photo.title }}
    </p>
    <img v-bind:src="photo.url" v-bind:alt="photo.title" />
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: ["photo"],
};
</script>

<style scoped></style>
