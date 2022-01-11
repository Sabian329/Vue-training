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
import LibraryItem from "../LibraryItem/LibraryItem.vue";
export default {
  components: { LibraryItem },
  name: "Library",
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

<style lang="scss" scoped>
ul {
  width: 100rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  height: 50rem;
  color: #fff;
  font-size: 1.2rem;
}
</style>
