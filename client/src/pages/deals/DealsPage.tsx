import React, { useState } from "react";
import DealsCard from "../../components/sections/deals/DealsCard";
import DealsFilterButtons from "./DealsFilterButtons";
import DealsHero from "./DealsHero";
import { motion } from "framer-motion";
import DealsSkeletonLoader from "../../components/sections/deals/DealsSkeletonLoader";
import { useQuery } from "react-query";
import { Product } from "../../api/types";
import { getAllProducts } from "../../api/productsApi";
import { TDealsProps } from "../../components/sections/deals/types";
import DealsRangeFilter from "./DealsRangeFilter";

const DealsPage: React.FC = () => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<string[]>(
    []
  );
  const { data: products, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const dealsData = products?.map((item: any) => ({
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

  const filteredProducts = dealsData?.filter((product: any) =>
    selectedFilterOptions.includes(product.category.toUpperCase())
  );
  const isFilterOptionEmpty = selectedFilterOptions.length === 0;
  const deals = isFilterOptionEmpty ? dealsData : filteredProducts;

  const filterOptions = [
    ...new Set(products?.map((product: any) => product.category.toUpperCase())),
  ];
  const productPrices = dealsData?.map((product) => product.price);

  return (
    <div className="page-layout min-h-[100vh] h-full">
      <DealsHero />
      <DealsFilterButtons
        selectedFilterOptions={selectedFilterOptions}
        setSelectedFilterOptions={setSelectedFilterOptions}
        filterOptions={filterOptions}
      />
      <DealsRangeFilter productPrices={productPrices} />
      <p className="section-title">Deals for you!</p>
      {isLoading && <DealsSkeletonLoader loaderLength={15} />}
      <motion.div layout className="grid md:grid-cols-3 gap-6">
        {!isLoading &&
          deals?.map((deal: TDealsProps) => (
            <DealsCard key={deal.id} {...deal} />
          ))}
      </motion.div>
    </div>
  );
};

export default DealsPage;
