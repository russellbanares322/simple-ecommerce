import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api/productsApi";
import { Product } from "../../api/types";
import { TRangeFilterProps } from "./type";

const DealsRangeFilter: React.FC<TRangeFilterProps> = ({
  selectedPrice,
  setIsUserSelectingPrice,
  setSelectedPrice,
}) => {
  const { data: products } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });
  const productPrices = [
    ...new Set(
      products
        ?.sort((a, b) => a.price - b.price)
        ?.map((product) => product.price)
    ),
  ];
  const maximumPrice = productPrices && Math.max(...(productPrices as []));
  const minimumPrice = 0;

  const handleChangeRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsUserSelectingPrice(true);
    setSelectedPrice(parseInt(value));
    const loadingTimeout = setTimeout(() => {
      setIsUserSelectingPrice(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  };

  return (
    <div className="pb-5">
      <h1 className="pb-2 text-sm font-bold">Filter by price</h1>
      <p className="text-sm">
        Selected price: <strong>${selectedPrice.toLocaleString()}</strong>
      </p>
      <input
        className="w-40"
        onChange={handleChangeRangeValue}
        type="range"
        value={selectedPrice}
        min={minimumPrice}
        max={maximumPrice}
      />
    </div>
  );
};

export default DealsRangeFilter;
