import React from "react";
import { useProducts } from "../../hooks";
import ProductsCard from "../../components/ProductsCard";

const Products = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al obtener los datos de los productos: {error.message}</p>;
  }

  return (
    <div>
      {data.map((product) => (
        <ProductsCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

