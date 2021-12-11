import React from "react";

import { useCart } from "../../Providers/Cart";

const Card = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <img src={product.img} alt="Produto." />
      <div className="info">
        <span>{product.name}</span>
        <p>R$ {product.price},00</p>
      </div>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default Card;
