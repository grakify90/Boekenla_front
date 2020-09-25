<template>
  <div id="page">
    <h1>Deze id: {{ id }}</h1>
    <a
      style="cursor: pointer; text-decoration: underline"
      v-on:click="navigate()"
      >Go back</a
    >
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Detail",
  data() {
    return {
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  },
};
</script>

