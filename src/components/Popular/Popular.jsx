import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./style.css";
import picture from "../../assets/Byket.jpg";
const Popular = () => {
  return (
    <div className="popular">
      <ProductCard src={picture} size="M" price="1500" />
      <ProductCard src={picture} size="S" price="1100" />
      <ProductCard src={picture} size="L" price="3500" />
      <ProductCard src={picture} size="XL" price="5500" />
    </div>
  );
};

export default Popular;
