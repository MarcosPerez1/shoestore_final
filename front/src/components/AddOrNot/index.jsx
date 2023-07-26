import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalText,
  ModalButton,
} from "./styles";

const AddOrNot = ({ message, onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalText>{message}</ModalText>
        <ModalButton onClick={onClose}>Cerrar</ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default AddOrNot;
