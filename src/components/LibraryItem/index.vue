<template>
  <li>
    <Modal v-if="isModalOpen" :item="item" @close="setModalOpen" />
    <p class="title">{{ item.data[0].title.substring(0, 30) + "..." }}</p>
    <img @click="setModalOpen(true)" v-bind:src="item.links[0].href" />
    <button @click="closeImages">close all</button>
  </li>
</template>

<script>
import Modal from "../Modal/index.vue";

export default {
  name: "LibraryItem",

  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    setModalOpen(value) {
      this.isModalOpen = value;
    },
    closeImages() {
      this.$emit("close", false);
    },
  },
  props: {
    item: [],
  },
};
</script>
<style src="./style.scss" lang="scss" scoped></style>
