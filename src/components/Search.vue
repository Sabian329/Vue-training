<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      placeholder="Moon"
    />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://images-api.nasa.gov/search?q=";

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios
        .get(`${API}${this.searchValue}&media_type=image`)
        .then((responce) => {
          this.results = responce.data.collection.items;
        })
        .catch((error) => console.log(error));
      this.$emit("array", this.results);
    }, 500),
  },
};
</script>
<style lang="scss" scoped>
.searchWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid #fff;
    font-size: 1rem;
    text-align: center;
    background: transparent;
    ::placeholder {
      color: #fff;
    }
  }
}
</style>
