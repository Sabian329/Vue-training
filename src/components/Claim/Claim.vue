<template>
  <wrapper>
    <styled-title>SPACER</styled-title>
    <p>
      Begin your journey through our amazing galaxy<br />
      and discover places you never even heard of.
    </p>
    <p>Type anything space-related to start.</p>
  </wrapper>
</template>

<script>
import { StyledTitle, Wrapper } from "./styled.js";

export default {
  name: "Claim",
  components: {
    "styled-title": StyledTitle,
    wrapper: Wrapper,
  },
};
</script>
