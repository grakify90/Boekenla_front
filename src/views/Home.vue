<template>
  <div id="page">
    <Books v-bind:books="filteredBooks" />
  </div>
</template>

<script>
// import axios from "axios";
import Books from "../components/Books";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Books,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["filteredBooks"]),
  },
  // created() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos?_limit=15")
  //     .then((res) => (this.books = res.data))
  //     .catch((error) => console.log(error.message));
  // },
};
</script>

<style scoped></style>
