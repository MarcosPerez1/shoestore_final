import React, { useState } from "react";
import {Carroussel}from "../../components/Carroussel";
import Title from "../../components/Title";
import Modal from "../../components/Modal";


const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
   

      <div>
        <Title>Nuestros artículos más demandados</Title>
        <Carroussel />
      </div>

      {showModal && <Modal handleModal={() => setShowModal(false)} />}
    </>
  );
};

export default Home;
