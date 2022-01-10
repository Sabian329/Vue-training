<template>
  <li>
    <p class="title">{{ title }}</p>
    <img v-bind:src="href" />
  </li>
</template>

<script>
export default {
  name: "LibraryItem",
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
  cursor: pointer;
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
</style>
