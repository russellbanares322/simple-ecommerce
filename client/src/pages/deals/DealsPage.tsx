import React, { useEffect, useState } from "react";
import DealsCard from "../../components/sections/deals/DealsCard";
import DealsHero from "./DealsHero";
import { motion } from "framer-motion";
import DealsSkeletonLoader from "../../components/sections/deals/DealsSkeletonLoader";
import { useQuery } from "react-query";
import { TProducts } from "../../api/types";
import { getAllProducts } from "../../api/productsApi";
import { TDealsProps } from "../../components/sections/deals/types";
import { TFilterOptions, TFormattedProductsData } from "./type";
import DealsSidebar from "./DealsSidebar";

const DealsPage: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState<TFilterOptions>({
    selectedPrice: 0,
    selectedCategories: [],
  });
  const [isUserSelectingPrice, setIsUserSelectingPrice] =
    useState<boolean>(false);
  const { data: products, isLoading } = useQuery<TProducts[], Error>({
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
    filterOptions.selectedCategories.length === 0 &&
    filterOptions.selectedPrice === 0;

  const dealsData = isFilterOptionEmpty
    ? formattedProductsData
    : filteredProducts;

  const productCategories = [
    ...new Set(products?.map((product: any) => product.category.toUpperCase())),
  ];

  const checkIfSelectedCategoryIsAdded = (category: string) => {
    const isSelectedCategorySaved =
      filterOptions.selectedCategories.includes(category);

    if (isSelectedCategorySaved) {
      return true;
    }
    return false;
  };

  const selectCategory = (selectedCategory: string) => {
    triggerLoadingState();
    if (checkIfSelectedCategoryIsAdded(selectedCategory)) {
      const filteredSelectedCategoriesFilter =
        filterOptions.selectedCategories.filter(
          (category) => category !== selectedCategory
        );
      setFilterOptions({
        ...filterOptions,
        selectedCategories: filteredSelectedCategoriesFilter,
      });
    } else {
      setFilterOptions({
        ...filterOptions,
        selectedCategories: [
          ...filterOptions.selectedCategories,
          selectedCategory,
        ],
      });
    }
  };

  const selectPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    triggerLoadingState();
    setFilterOptions({
      ...filterOptions,
      selectedPrice: parseInt(e.target.value),
    });
  };

  const triggerLoadingState = () => {
    setIsUserSelectingPrice(true);
    const loadingTimeout = setTimeout(() => {
      setIsUserSelectingPrice(false);
    }, 500);

    return () => clearTimeout(loadingTimeout);
  };

  useEffect(() => {
    const filteredData = formattedProductsData?.filter(
      (product) =>
        filterOptions.selectedCategories.includes(
          product.category.toUpperCase()
        ) || product.price <= filterOptions.selectedPrice
    );

    const reversedFilteredData = filteredData?.reverse();

    setFilteredProducts(reversedFilteredData);
  }, [filterOptions.selectedCategories, filterOptions.selectedPrice]);

  return (
    <div className="page-layout min-h-screen h-full">
      <DealsHero />
      <p className="section-title my-7">Deals for you!</p>
      <div className="flex items-start justify-start gap-2">
        <div className="h-full">
          <DealsSidebar
            selectCategory={selectCategory}
            productCategories={productCategories}
            checkIfSelectedCategoryIsAdded={checkIfSelectedCategoryIsAdded}
            selectPrice={selectPrice}
            selectedPrice={filterOptions.selectedPrice}
          />
        </div>
        <div>
          {isLoading ||
            (isUserSelectingPrice && <DealsSkeletonLoader loaderLength={15} />)}
          <motion.div layout className="h-full grid md:grid-cols-3 gap-6">
            {!isLoading &&
              dealsData?.map((deal: TDealsProps) => (
                <DealsCard key={deal.id} {...deal} />
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
