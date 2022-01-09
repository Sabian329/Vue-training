<template>
  <div class="claimWrapper">
    <h1>SPACER</h1>
    <p>
      Begin your journey through our amazing galaxy<br />
      and discover places you never even heard of.
    </p>
    <p>Type anything space-related to start.</p>
  </div>
</template>

<script>
export default {
  name: "Claim",
};
</script>

<style scoped lang="scss">
.claimWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", sans-serif;
  color: rgb(255, 255, 255);
  img {
    width: 5rem;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.5rem;
  }
}
</style>
