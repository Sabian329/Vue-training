<template>
  <div class="modal-wrapper" @click="setModalOpen">
    <div class="modal-content" @click.stop>
      <h1>{{ item.data[0].title }}</h1>
      <img v-bind:src="item.links[0].href" />
      <p>{{ item.data[0].description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    item: [],
  },
  mount() {
    console.log("dddd");
  },
  methods: {
    setModalOpen() {
      this.$emit("close", false);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
