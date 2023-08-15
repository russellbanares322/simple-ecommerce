import React, { useEffect, useState } from "react";
import useProduct from "../../store/productStore/useProduct";
import DealsFilterButtons from "./DealsFilterButtons";
import DealsHero from "./DealsHero";

const DealsPage: React.FC = () => {
  const { products, getProducts } = useProduct();
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<
    string[] | []
  >([]);
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const filterOptions = [
    ...new Set(products?.map((product: any) => product.category.toUpperCase())),
  ];

  return (
    <div className="page-layout">
      <DealsHero />
      <DealsFilterButtons
        selectedFilterOptions={selectedFilterOptions}
        setSelectedFilterOptions={setSelectedFilterOptions}
        filterOptions={filterOptions}
      />
      <p className="section-title">Deals for you!</p>
    </div>
  );
};

export default DealsPage;
