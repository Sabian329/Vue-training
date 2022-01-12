<template>
  <ul>
    <LibraryItem
      @close="closeImages"
      v-for="item in array"
      :key="item.data[0].nasa_id"
      :title="item.data[0].title"
      :href="item.links[0].href"
    />
  </ul>
</template>

<script>
import LibraryItem from "../LibraryItem/index.vue";
export default {
  components: {
    LibraryItem,
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
