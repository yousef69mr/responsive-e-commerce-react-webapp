import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product">
      <div className="left-s">
        <div className="name">
          <span>{props.product.name}</span>
          <span>{props.product.detail}</span>
        </div>
        <span>{props.product.price} $</span>
        <button>Show Now</button>
      </div>
      <img src={props.product.img} className="img-p" alt="" />
    </div>
  );
};

export default ProductCard;
