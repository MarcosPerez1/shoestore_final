import React, { useState } from "react";
import Title from "../../components/Title";
import Common from "../../styles";
import Styled from "./styles";
import ProductsCard from "../../components/ProductsCard";

import Modal from "../../components/Modal";
import { useUser, useFavUser } from "../../hooks";

const userPage = () => {
  const { data: user } = useUser();
  const { data: favourites } = useFavUser();
  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={setShowModal} />;
  console.log(favourites)
   
  return (
    <Common.Page>

      {favourites?.data.map((product, index)=>(
          <ProductsCard product={product} key={index} />
      ))}

      <Styled.User onClick={() => setShowModal(true)}>
        <p>{user.data.username}</p>
      </Styled.User>
      <Title>Mis productos</Title>
    </Common.Page>
  );
};

export default userPage; 
