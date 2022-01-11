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
<style lang="scss" scoped>
li {
  height: 35rem;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.548);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
}
img {
  width: 25rem;
  height: 25rem;
  object-fit: contain;
}
.title {
  font-size: 1.5rem;
  text-align: center;
}
button {
  width: 6rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.548);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
