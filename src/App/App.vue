<template>
  <div class="mainWrapper">
    <Claim />
    <Search @input="setInputValue" v-model="inputValue" />
    <button
      class="rocket-button"
      @mouseover="animations(true)"
      @mouseleave="animations(false)"
      @click="search"
    >
      <img class="search" src="../assets/images/telescope.svg" />
    </button>
    <Loading v-if="isLoading" />
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
import Loading from "@/components/Loading/Loading.vue";
import { url } from "../assets/Api/apiConfig";
import { gsap } from "gsap";

export default {
  name: "App",
  components: {
    Search,
    ContentLibrary,
    Claim,
    Loading,
  },
  data() {
    return {
      results: [],
      typing: false,
      isLoaded: false,
      inputValue: "spacewalk",
      value: "",
      url,
      isLoading: false,
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
      this.isLoading = true;
      axios
        .get(`${url}${this.inputValue}&media_type=image`)
        .then((responce) => {
          this.results = responce?.data?.collection?.items;
          this.results && (this.isLoading = false);
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
