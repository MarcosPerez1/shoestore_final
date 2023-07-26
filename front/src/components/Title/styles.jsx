import { styled } from "styled-components";

const Wrapper = styled.section`
  h1 {
    font-size: 36px;
    margin-bottom:30px;
    text-align:center;
  }

  h2,
  h3 {
    font-size: 28px;
    margin: 0 0 30px;
  }

  text-align: ${({ position }) => position};
`;

export default {
  Wrapper,
};
