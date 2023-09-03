import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api/productsApi";
import { Product } from "../../api/types";
import { TRangeFilterProps } from "./type";

const DealsRangeFilter: React.FC<TRangeFilterProps> = ({
  selectedPrices,
  setSelectedPrices,
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
  const [rangeValue, setRangeValue] = useState<number>(0);

  const handleChangeRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setRangeValue(valueAsNumber);
    setSelectedPrices([...selectedPrices, valueAsNumber]);
  };

  const removeSavedPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    if (rangeValue > valueAsNumber) {
      const savedPrices = [...selectedPrices];
      savedPrices.pop();
      setSelectedPrices(savedPrices);
    }
  };

  return (
    <div className="pb-5">
      <h1 className="pb-2 text-sm font-bold">Filter by price</h1>
      <input
        style={{ width: `${productPrices.length * 39}px` }}
        onInput={removeSavedPrice}
        onChange={handleChangeRangeValue}
        type="range"
        step={1}
        value={rangeValue}
        min={minimumPrice}
        max={maximumPrice}
      />
      <datalist className="flex gap-5">
        {productPrices?.map((price) => (
          <option
            className="p-0 text-sm"
            key={price}
            value={price}
            label={price + ""}
          ></option>
        ))}
      </datalist>
      <p>
        Selected price: <strong>{rangeValue}</strong>
      </p>
    </div>
  );
};

export default DealsRangeFilter;
