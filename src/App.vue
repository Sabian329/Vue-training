<template>
  <div id="app">
    <Claim />
    <Search @array="toggleState" />
    <ul>
      <li v-for="i in images" :key="i.href"><img :src="i.links[0].href" /></li>
    </ul>
  </div>
</template>
<script>
import Claim from "@/components/Claim.vue";
import Search from "@/components/Search.vue";
export default {
  name: "App",
  components: {
    Search,
    Claim,
  },
  data() {
    return {
      loading: false,
      step: 0,
      images: [],
    };
  },
  methods: {
    setArray(payload) {
      payload = this.array;
    },
    toggleState: function (value) {
      this.images = value;
      console.log(this.images);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0;
  padding: 0;
}
</style>
