<template>
  <div>
    <div v-bind:key="photo.id" v-for="photo in photos">
      <PhotoItem v-bind:photo="photo" />
    </div>
  </div>
</template>

<script>
import PhotoItem from "./PhotoItem.vue";

export default {
  name: "Photos",
  components: {
    PhotoItem,
  },
  props: ["photos"],
};
</script>

<style scoped></style>
