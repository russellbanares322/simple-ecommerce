import React from "react";
import CategoriesSection from "../../components/sections/categories/CategoriesSection";
import Deals from "../../components/sections/deals/Deals";
import Hero from "../../components/sections/hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <Deals />
    </>
  );
};

export default Home;
