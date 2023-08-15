import React, { useState, useEffect } from "react";
import useProduct from "../../store/productStore/useProduct";
import DealsFilterButtons from "./DealsFilterButtons";
import DealsHero from "./DealsHero";

const DealsPage: React.FC = () => {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const filterOptions = [
    ...new Set(products?.map((product: any) => product.category.toUpperCase())),
  ];

  return (
    <div className="page-layout">
      <DealsHero />
      <DealsFilterButtons filterOptions={filterOptions} />
      <p className="section-title py-20">Deals for you!</p>
    </div>
  );
};

export default DealsPage;
