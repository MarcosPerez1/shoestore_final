import React, { useState } from "react";
import { useProducts, useUser } from "../../hooks";
import ProductsCard from "../../components/ProductsCard";
import Modal from "../../components/Modal";
import Styled from "./styles";
import Common from "../../styles";

const Products = () => {
  const { data: user } = useUser();
  const { data, isLoading, error } = useProducts();
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  if (showModal) return <Modal handleModal={() => setShowModal(false)} />;

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al obtener los datos de los productos: {error.message}</p>;
  }

  const dataFilter = data.filter(product => product.brand.toLowerCase().includes(filter.toLowerCase()) || product.model.toLowerCase().includes(filter.toLowerCase()))

  return (
    <Common.Page>
      <div>
        {user.data && (
          <Styled.User onClick={() => setShowModal(true)}>
            <p>{user.data.username}</p>
          </Styled.User>
        )}

        <div>
          <input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="filter"
            placeholder="Nombre de artículo"
          />

          <Styled.ProductGrid>
            {dataFilter.map((product) => (
              <div key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </Styled.ProductGrid>
        </div>
      </div>
    </Common.Page>
  );
};

export default Products;
