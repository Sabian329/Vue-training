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
<style lang="scss" scoped>
.searchWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 30px;
  input {
    border: 0;
    border-bottom: 1px solid #fff;
    font-size: 1.5rem;
    padding: 0.7rem 0 0.7rem 0;
    text-align: center;
    background: transparent;
    color: #fff;

    ::placeholder {
      color: #fff;
    }
  }
}
</style>
