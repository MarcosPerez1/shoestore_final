import React, { useState } from "react";
import Title from "../../components/Title";
import Common from "../../styles";
import Styled from "./styles";
import ProductsCard from "../../components/ProductsCard";
import { FaPowerOff } from 'react-icons/fa';

import Modal from "../../components/Modal";
import { useUser, useFavUser } from "../../hooks";

const userPage = () => {
  const { data: user } = useUser();
  const { data: favourites } = useFavUser();
  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={setShowModal} />;

  return (
    <Common.Page>
      <Title>Mis productos</Title>

      <Styled.ProductGrid>
        {favourites?.data.map((product, index) => (
          <div key={index}>
            <ProductsCard product={product} show={false} />
          </div>
        ))}
      </Styled.ProductGrid>

      <Styled.User onClick={() => setShowModal(true)}>
        <p>{user.data.username}</p>
        <FaPowerOff />
      </Styled.User>
    </Common.Page>
  );
};

export default userPage;
