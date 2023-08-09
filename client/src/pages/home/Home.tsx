import React from "react";
import CategoriesSection from "../../components/sections/categories/CategoriesSection";
import Hero from "../../components/sections/hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
    </>
  );
};

export default Home;
