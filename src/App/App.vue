<template>
  <div class="mainWrapper">
    <Claim />
    <Search @input="setInputValue" v-model="inputValue" />
    <button @mouseover="animations(true)" @mouseleave="animations(false)" @click="search">
      <img class="search" src="../assets/images/telescope.svg" />
    </button>
    <ContentLibrary
      class="content-library"
      v-if="isLoaded === true"
      :array="results"
      @close="closeImages"
      :close="isLoaded"
    />
  </div>
</template>
<script>
import axios from "axios";
import Search from "@/components/Search/index.vue";
import ContentLibrary from "@/components/ContentLibrary/index.vue";
import Claim from "@/components/Claim/index.vue";
import { url } from "../assets/Api/apiConfig";
import { gsap } from "gsap";

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
      typing: false,
      isLoaded: false,
      inputValue: "hubble",
      value: "",
      url,
    };
  },

  methods: {
    animations(on) {
      on
        ? gsap.to(".search", { rotate: -45, duration: 0.2 })
        : gsap.to(".search", { rotate: 0, duration: 0.2 });
    },
    search() {
      this.results = [];
      axios
        .get(`${url}${this.inputValue}&media_type=image`)
        .then((responce) => {
          this.isLoading = true;
          this.results = responce?.data?.collection?.items;
          responce.status === 200 && (this.isLoaded = true);
        })
        .catch((error) => console.log(error));
      gsap.to(".search", { y: -200, opacity: 0, rotate: [-45, -45], duration: 0.2 });
    },
    setInputValue: function (payload) {
      payload = this.inputValue;
      let app = gsap.to(".search", { y: 0, opacity: 1, rotate: 0, duration: 0.5 });
    },
    closeImages: function (value) {
      this.isLoaded = value;
      gsap.to(".search", { y: 0, opacity: 1, rotate: 0, duration: 0.5 });
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
