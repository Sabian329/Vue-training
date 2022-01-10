import styled from "vue-styled-components";

export const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-size: 4rem;
  font-family: "Orbitron", sans-serif;
  background: -webkit-linear-gradient(#7177c7, rgb(178, 185, 192));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", sans-serif;
  color: rgb(255, 255, 255);
  img {
    width: 5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
