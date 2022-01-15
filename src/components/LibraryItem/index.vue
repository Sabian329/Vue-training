<template>
  <li>
    <Modal v-if="isModalOpen" :item="item" @close="setModalOpen" />
    <p class="title">{{ item.data[0].title.substring(0, 30) + "..." }}</p>
    <div class="img-wrapper">
      <img
        class="img-content"
        alt="NASA API IMG"
        @click="setModalOpen(true)"
        v-bind:src="item.links[0].href"
        ref="img"
      />
      <Loading class="loading-window" />
    </div>
  </li>
</template>

<script>
import Loading from "../Loading/Loading.vue";
import Modal from "../Modal/index.vue";

export default {
  name: "LibraryItem",

  data() {
    return {
      isModalOpen: false,
      isComplete: false,
    };
  },
  components: {
    Modal,
    Loading,
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
