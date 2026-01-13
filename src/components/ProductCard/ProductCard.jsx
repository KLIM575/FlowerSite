import React from "react";
import "./style.css";

const ProductCard = () => {
  return (
    <div className="roductCard">
      <img className="img" src="/src/assets/Byket.jpg" alt="Букет" />
      <div className="">
        M<div>Size</div>
      </div>
      <span className="price">1 500 ₽</span>
      <button>купить</button>
    </div>
  );
};

export default ProductCard;
