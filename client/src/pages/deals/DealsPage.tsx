import React, { useEffect, useState } from "react";
import DealsCard from "../../components/sections/deals/DealsCard";
import { TDealsProps } from "../../components/sections/deals/types";
import useProduct from "../../store/productStore/useProduct";
import DealsFilterButtons from "./DealsFilterButtons";
import DealsHero from "./DealsHero";

const DealsPage: React.FC = () => {
  const { products, getProducts } = useProduct();
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<string[]>(
    []
  );
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const dealsData: TDealsProps[] = products.map((item: any) => ({
    id: item.id,
    inputPrice: item.inputPrice,
    category: item.category,
    quantity: item.quantity,
    title: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  }));

  const filteredProducts = dealsData.filter((product: any) =>
    selectedFilterOptions.includes(product.category.toUpperCase())
  );
  const isFilterOptionEmpty = selectedFilterOptions.length === 0;
  const deals = isFilterOptionEmpty ? dealsData : filteredProducts;

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
      <div className="grid md:grid-cols-3 gap-6">
        {deals?.map((deal) => (
          <DealsCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
