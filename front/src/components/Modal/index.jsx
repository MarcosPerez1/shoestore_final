import { useAuth } from "../../hooks";
import Styled from "../../styles";
import Button from "../Button";
import Title from "../Title";

const Modal = ({ handleModal }) => {
  const { logout } = useAuth();

  return (
    <Styled.Page vertical="center">
      <Title tag="h2" position="center">
        Vas a abandonar la sesión
      </Title>
      <Title tag="h3">¿Estás seguro?</Title>
      <Button onClick={() => handleModal(false)}>Denegar</Button>
      <Button onClick={logout}>Confirmar</Button>
    </Styled.Page>
  );
};

export default Modal;
