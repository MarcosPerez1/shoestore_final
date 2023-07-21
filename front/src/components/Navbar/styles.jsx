import { styled } from "styled-components";

const Nav = styled.nav`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  font-size: 1.2rem;
  margin: 0;
  height: 50px;
  background-color: black;
  text-align: center;
  padding: 0;


`;

const Anchor = styled.a`
  ${({ isActive }) => `
    color: ${isActive ? "#EBEBEB" : "#00A7E1"};
    text-decoration: ${!isActive && "none"};
    font-size: ${isActive ? "1.6rem" : "1.3rem"};
  `}
`;


export default {
  Nav,
  Anchor,
 
};
