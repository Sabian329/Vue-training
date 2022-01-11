<template>
  <div id="app">
    <div class="mainWrapper">
      <Claim />
      <Search @input="setInputValue" v-model="inputValue" />
      <button @click="search"><img class="search" src="./assets/telescope.svg" /></button>
      <Library v-if="isLoaded === true" :array="results" @close="closeImages" :close="isLoaded" />
    </div>
  </div>
</template>
<script>
const API = "https://images-api.nasa.gov/search?q=";
import axios from "axios";
import Claim from "@/components/Claim/Claim.vue";
import Search from "@/components/Search/Search.vue";
import Library from "@/components/Library/Library.vue";
export default {
  name: "App",
  components: {
    Search,
    Claim,
    Library,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      isLoaded: false,
      inputValue: "hubble",
      value: "",
    };
  },
  methods: {
    search() {
      this.results = [];
      axios
        .get(`${API}${this.inputValue}&media_type=image`)
        .then((responce) => {
          this.isLoading = true;
          this.results = responce?.data?.collection?.items;
          this.results.length ? (this.isLoading = false) : (this.isLoading = true);
          responce.status === 200 && (this.isLoaded = true);
        })
        .catch((error) => console.log(error));
    },
    setInputValue: function (payload) {
      payload = this.inputValue;
    },
    closeImages: function (value) {
      this.isLoaded = value;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("./assets/background.jpg");
  background-position: center;
  background-size: cover;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 1;
  overflow-x: hidden;
}
.mainWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  margin-top: 10rem;
  z-index: 2;
  height: max-content;
}
button {
  background: transparent;
  border: 0;
  font-size: 2rem;
  margin: 1rem;
  cursor: pointer;

  :focus :active {
    background: none;
  }
  :hover {
    transition: 0.2s linear;
    transform: rotate(-45deg);
  }
  .search {
    transition: 0.2s linear;
    width: 3rem;
  }
}
</style>
