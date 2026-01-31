import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
import Popular from "../components/popular/Popular";
const ShowcasePage = () => {
  return (
    <div>
      <Header />
      <Popular />
      <Footer />
    </div>
  );
};

export default ShowcasePage;
