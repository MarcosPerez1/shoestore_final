import React, { useState } from "react";
import { useProducts } from "../../hooks";
import ProductsCard from "../../components/ProductsCard";

const Products = () => {
  const { data, isLoading, error } = useProducts();
  const [filter, setFilter] = useState('');

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al obtener los datos de los productos: {error.message}</p>;
  }

  const dataFilter = data.filter(product =>  product.brand.toLowerCase().includes(filter.toLowerCase()) || product.model.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <input
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        name="filter"
        placeholder="Nombre de artículo"
      />

      <div>
        {dataFilter.map((product) => (
          <ProductsCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
