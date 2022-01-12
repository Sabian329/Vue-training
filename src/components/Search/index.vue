<template>
  <div class="searchWrapper">
    <input
      autocomplete="off"
      id="search"
      name="search"
      @input="handleChange"
      placeholder="e.g. Titan "
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    handleChange: function (e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style src="./style.scss" lang="scss" scoped></style>
