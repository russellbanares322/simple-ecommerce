import React, { useEffect, useState } from "react";
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
import { TFormattedProductsData } from "./type";

const DealsPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const { data: products, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });
  const [filteredProducts, setFilteredProducts] = useState<
    TFormattedProductsData[]
  >([]);

  const formattedProductsData = products?.map((item: any) => ({
    id: item.id,
    inputPrice: item.inputPrice,
    category: item.category,
    quantity: item.quantity,
    title: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  })) as TFormattedProductsData[];

  const isFilterOptionEmpty =
    selectedCategories.length === 0 && selectedPrice === 0;

  const dealsData = isFilterOptionEmpty
    ? formattedProductsData
    : filteredProducts;

  const filterOptions = [
    ...new Set(products?.map((product: any) => product.category.toUpperCase())),
  ];

  useEffect(() => {
    const filteredData = formattedProductsData?.filter(
      (product) =>
        selectedCategories.includes(product.category.toUpperCase()) ||
        product.price <= selectedPrice
    );
    setFilteredProducts(filteredData);
  }, [selectedCategories, selectedPrice]);

  return (
    <div className="page-layout min-h-[100vh] h-full">
      <DealsHero />
      <DealsFilterButtons
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        filterOptions={filterOptions}
      />
      <DealsRangeFilter
        setSelectedPrice={setSelectedPrice}
        selectedPrice={selectedPrice}
      />
      <p className="section-title">Deals for you!</p>
      {isLoading && <DealsSkeletonLoader loaderLength={15} />}
      <motion.div layout className="grid md:grid-cols-3 gap-6">
        {!isLoading &&
          dealsData?.map((deal: TDealsProps) => (
            <DealsCard key={deal.id} {...deal} />
          ))}
      </motion.div>
    </div>
  );
};

export default DealsPage;
