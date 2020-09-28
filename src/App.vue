<template>
  <div id="nav">
    <div>
      <router-link active-class="active" to="/" exact>Home</router-link>
      //
      <router-link active-class="active" to="/mypage">My page</router-link>
    </div>
    <div id="searchbar">
      <input
        type="text"
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <select
        @change="chooseGenre"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="choose" selected disabled>Choose genre</option>
        <option v-bind:key="genre" v-for="genre in genres">
          {{ genre }}
        </option>
      </select>
      <button @click="doSearch" class="btn btn-blue">search</button>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      searchText: "",
      searchGenre: "",
      search: { text: "", genre: "" },
    };
  },
  computed: {
    ...mapState(["genres", "books", "filteredBooks"]),
  },
  methods: {
    ...mapActions(["searchBooks"]),
    chooseGenre(event) {
      this.searchGenre = event.target.value;
    },
    doSearch() {
      this.search.text = this.searchText;
      this.search.genre = this.searchGenre;
      const payload = this.search;
      this.searchBooks(payload);
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/variables";
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $lila;
  min-height: 100vh;
}

#page {
  margin-top: 100px;
}

#nav {
  padding: 30px;
  background-color: $candyfloss;
  display: flex;
  justify-content: space-between;

  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  height: 100px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: $lila;
    }
  }
}

#searchbar {
  display: flex;
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
