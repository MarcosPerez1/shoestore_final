import { Link } from "wouter";
import Footer from "../../components/Footer";
import Form from "../../components/Form"
import Input from "../../components/Input";
import Title from "../../components/Title";
import Styled from "../../styles";

import { validations } from "../../constans";
import { useAuth } from "../../hooks/useAuth";
import { useLogged } from "../../hooks";

const Register = () => {
  useLogged()
  const { register } = useAuth();
  const { required } = validations;

  return (
    <Styled.Page>
      <Title>Regístrate!</Title>

      <Form onSubmit={register} button="Registrame!">
        <Input
          name="email"
          label={true}
          placeholder="youremail@email.com"
          validation={{ required }}
        />
        <Input
          name="username"
          label={true}
          placeholder="username"
          validation={{ required }}
        />
        <Input
          name="password"
          type="password"
          label={true}
          placeholder="******"
          validation={validations}
        />
      </Form>

      <Footer>
        <Link to="/login">¿Listo para explorar de nuevo? ¡Bienvenido de nuevo a tu cuenta!</Link>
      </Footer>
    </Styled.Page>
  );
};

export default Register;
