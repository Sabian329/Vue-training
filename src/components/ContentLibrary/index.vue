<template>
  <ul class="library-list">
    <button class="fixed-button" @click="closeImages">Close List</button>
    <LibraryItem v-for="item in array" :key="item.data[0].nasa_id" :item="item" />
  </ul>
</template>

<script>
import Modal from "../Modal/index.vue";
import LibraryItem from "../LibraryItem/index.vue";
export default {
  components: {
    LibraryItem,
    Modal,
  },
  name: "ContentLibrary",
  props: {
    array: [],
  },
  methods: {
    closeImages() {
      this.$emit("close", false);
    },
  },
};
</script>
<style src="./style.scss" lang="scss"></style>
