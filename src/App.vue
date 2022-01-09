<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
