import { styled } from "styled-components";

const Button = styled.button`
  min-width: 75%;
  height: 45px;
  font-size: 21px;
  border-radius: 10px;
  background-color: #007bff;
  color: white; 
  border: none; 
  cursor: pointer;

  &:hover {
    background-color: #0056b3; 
  }
`;

export default {
  Button,
};
