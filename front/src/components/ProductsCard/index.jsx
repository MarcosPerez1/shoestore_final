import React from "react";
import { Card, Image, Brand, Model, Size, Price } from "./styles";

const ProductsCard = ({ product }) => {
  return (
    <Card key={product.id}>
      <Image src={product.images} alt={product.model} />
      <Brand>Marca: {product.brand}</Brand>
      <Model>Modelo: {product.model}</Model>
      <Size>Talla disponible: {product.size}</Size>
      <Price>Precio: {product.price}€</Price>
    </Card>
  );
};

export default ProductsCard;
