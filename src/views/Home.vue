<template>
  <Photos v-bind:photos="photos" />
</template>

<script>
import axios from "axios";
import Photos from "../components/Photos";

export default {
  name: "Home",
  components: {
    Photos,
  },
  data() {
    return {
      photos: [],
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => (this.photos = res.data))
      .catch((error) => console.log(error.message));
  },
};
</script>
