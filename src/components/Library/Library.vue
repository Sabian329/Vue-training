<template>
  <div class="searchWrapper">
    <ul @click="closeImages">
      <LibraryItem
        v-for="item in array"
        :key="item.data[0].nasa_id"
        :title="item.data[0].title"
        :href="item.links[0].href"
      />
    </ul>
  </div>
</template>

<script>
import LibraryItem from "./LibraryItem.vue";
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  list-style: none;
  height: 50rem;
  width: 100rem;
  color: #fff;
  font-size: 1.2rem;
}
</style>
