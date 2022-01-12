<template>
  <div id="app">
    <div class="mainWrapper">
      <Claim />
      <Search @input="setInputValue" v-model="inputValue" />
      <button @click="search"><img class="search" src="../assets/images/telescope.svg" /></button>
      <ContentLibrary
        v-if="isLoaded === true"
        :array="results"
        @close="closeImages"
        :close="isLoaded"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Search from "@/components/Search/index.vue";
import ContentLibrary from "@/components/ContentLibrary/index.vue";
import Claim from "@/components/Claim/index.vue";
import { url } from "../assets/Api/apiConfig";
export default {
  name: "App",
  components: {
    Search,
    ContentLibrary,
    Claim,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      isLoaded: false,
      inputValue: "hubble",
      value: "",
      url,
    };
  },
  methods: {
    search() {
      this.results = [];
      axios
        .get(`${url}${this.inputValue}&media_type=image`)
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

<style src="./style.scss" lang="scss" scoped></style>
