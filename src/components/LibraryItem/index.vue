<template>
  <li>
    <p class="title">{{ title }}</p>
    <img v-bind:src="href" />
    <button @click="closeImages">close all</button>
  </li>
</template>

<script>
export default {
  name: "LibraryItem",
  methods: {
    closeImages() {
      this.$emit("close", false);
    },
  },
  props: {
    title: "",
    href: "",
  },
};
</script>
<style src="./style.scss" lang="scss" scoped></style>
