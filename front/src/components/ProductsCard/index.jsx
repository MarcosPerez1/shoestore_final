import React from "react";
import { Card, Image, Brand, Model, Size, Price } from "./styles";
import { useUser } from "../../hooks";
import Button from "../Button";

const ProductsCard = ({ product, addFavourites, show = true }) => {
  const { data } = useUser();

  return (
    <Card key={product.id}>
      <Image src={product.images} alt={product.model} />
      <Brand>Marca: {product.brand}</Brand>
      <Model>Modelo: {product.model}</Model>
      <Size>Talla disponible: {product.size.toString()}</Size>
      <Price>Precio: {product.price}€</Price>
      {data.success && show && 
      <Button onClick={() => addFavourites(product.id)}>favs</Button>}
    </Card>
  );
};

export default ProductsCard;

