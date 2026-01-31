import React from "react";
import "./style.css";
const ProductCard = (props) => {
  return (
    <a href="/Product" className="product-card">
      <img className="img" src={props.src} alt="Букет" />
      <div className="container">
        <div className="info-product">
          <p>{props.size} </p>
          <div>Size</div>
        </div>
      </div>
      <div className="price-info">
        <span className="price">{props.price} ₽ </span>
        <button>купить</button>
      </div>
    </a>
  );
};

export default ProductCard;
