import { styled } from "styled-components";

const User = styled.section`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;

  p {
    margin: 0;
  }
`;



const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default {
  User,
  ProductGrid,
};
