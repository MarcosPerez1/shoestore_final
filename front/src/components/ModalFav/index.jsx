import React from "react";
import { useAuth } from "../../hooks";
import Styled from "../../styles";
import { FaPowerOff } from 'react-icons/fa';

const ModalFav = ({ handleModal, favourites }) => {
  const { logout } = useAuth();

  return (
    <Styled.Page vertical="center">
      <Styled.FavoritesSection>
        <h2>Vas a abandonar la sesión</h2>
        <h3>¿Estás seguro?</h3>
        <div>
          <button onClick={() => handleModal(false)}>Denegar</button>
          <button onClick={logout}>
            <FaPowerOff /> {/* Icono de encendido */}
            Confirmar
          </button>
        </div>
        <h3>Lista de favoritos</h3>
        {favorites.length === 0 ? (
          <p>No hay productos en la lista de favoritos.</p>
        ) : (
          <ul>
            {favorites.map((product) => (
              <li key={product.id}>
                {product.brand} - {product.model}
              </li>
            ))}
          </ul>
        )}
      </Styled.FavoritesSection>
    </Styled.Page>
  );
};

export default ModalFav;
