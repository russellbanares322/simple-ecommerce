import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api/productsApi";
import { TProducts } from "../../api/types";
import { TRangeFilterProps } from "./type";

const DealsRangeFilter: React.FC<TRangeFilterProps> = ({
  selectPrice,
  selectedPrice,
}) => {
  const { data: products } = useQuery<TProducts[], Error>({
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

  return (
    <div className="pb-5">
      <h1 className="pb-3 text-sm font-bold">Filter by price</h1>
      <p className="text-sm">
        Selected price: <strong>${selectedPrice.toLocaleString()}</strong>
      </p>
      <input
        className="w-full"
        onChange={selectPrice}
        type="range"
        value={selectedPrice}
        min={minimumPrice}
        max={maximumPrice}
      />
    </div>
  );
};

export default DealsRangeFilter;
