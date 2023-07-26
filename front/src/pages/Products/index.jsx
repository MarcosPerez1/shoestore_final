import React, { useState } from "react";
import { useProducts, useUser } from "../../hooks";
import ProductsCard from "../../components/ProductsCard";
import Modal from "../../components/Modal";
import AddOrNot from "../../components/AddOrNot";
import Styled from "./styles";
import Common from "../../styles";
import { FaPowerOff } from 'react-icons/fa';
import { useMutation } from "react-query";
import { changeFav } from "../../services";



const Products = () => {
  const { data: user } = useUser();
  const { data, isLoading, error } = useProducts();
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [minSize, setMinSize] = useState(37);
  const [maxSize, setMaxSize] = useState(45);
  const [showAddOrNotModal, setShowAddOrNotModal] = useState(false);
  const [addOrNotMessage, setAddOrNotMessage] = useState("");

  const { mutate: fav } = useMutation(
    changeFav.addFavourites,
    {
      onSuccess: (result) => {
        console.log(result, 'resultd')
      },
    }
  );

  const showAddOrNotModalMessage = (message) => {
    setAddOrNotMessage(message);
    setShowAddOrNotModal(true);
  };

  const addFavourites = async (productId) => {
    try {
      const params = {
        email: user.data.email,
        productId: productId,
      };
  
      const result = await fav(params);
      if (result.success) {
        showAddOrNotModalMessage("Producto agregado a favoritos correctamente");
      } else {
        showAddOrNotModalMessage("El producto ya esta en tu lista de favoritos");
      }
    } catch (error) {
      console.log(error, "error");
      showAddOrNotModalMessage("Error al agregar producto a favoritos.");
    }
  };
  

  if (showModal) return <Modal handleModal={() => setShowModal(false)} />;

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al obtener los datos de los productos: {error.message}</p>;
  }

  const dataFilter = data.filter(product => {

    const matchesBrandOrModel = product.brand.toLowerCase().includes(filter.toLowerCase()) || product.model.toLowerCase().includes(filter.toLowerCase());


    const price = parseFloat(product.price);
    const priceInRange = price >= minPrice && price <= maxPrice;


    const size = parseInt(product.size, 10);
    const sizeInRange = size >= minSize && size <= maxSize;

    return matchesBrandOrModel && priceInRange && sizeInRange;
  });

  return (
    <Common.Page>
      <div>
        {user.data && (
          <Styled.User onClick={() => setShowModal(true)}>
            <p>{user.data.username}</p>
            <FaPowerOff />
          </Styled.User>
        )}

        <div>
          <input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="filter"
            placeholder="Nombre de artículo"
          />

          <div>
            <label>Rango de precios:</label>
            <input
              type="number"
              min={0}
              max={150}
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
            />
            <span>-</span>
            <input
              type="number"
              min={0}
              max={150}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <label>Talla:</label>
            <input
              type="number"
              min={37}
              max={45}
              value={minSize}
              onChange={(e) => setMinSize(parseInt(e.target.value, 10))}
            />
            <span>-</span>
            <input
              type="number"
              min={37}
              max={45}
              value={maxSize}
              onChange={(e) => setMaxSize(parseInt(e.target.value, 10))}
            />
          </div>

          <Styled.ProductGrid>
            {dataFilter.map((product) => (
              <ProductsCard key={product.id} product={product} addFavourites={addFavourites} />
            ))}
          </Styled.ProductGrid>

        </div>
      </div>
      {showAddOrNotModal && (
        <AddOrNot
          message={addOrNotMessage}
          onClose={() => setShowAddOrNotModal(false)}
        />
      )}
    </Common.Page>
  );
};

export default Products;
