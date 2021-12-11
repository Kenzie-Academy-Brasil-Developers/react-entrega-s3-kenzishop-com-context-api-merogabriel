import React from "react";

const CardCart = ({ product }) => {
  return (
    <div className="cardCart">
      <img src={product.img} alt="Produto." />
      <div className="infoCart">
        <span>{product.name}</span>
        <p>R$ {product.price},00</p>
      </div>
    </div>
  );
};

export default CardCart;
