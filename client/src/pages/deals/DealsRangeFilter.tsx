import React, { useState } from "react";
import { TRangeFilterProps } from "./type";

const DealsRangeFilter: React.FC<TRangeFilterProps> = ({ productPrices }) => {
  const maximumPrice = Math.max(...(productPrices as []));
  const minimumPrice = Math.min(...(productPrices as []));
  const [rangeValue, setRangeValue] = useState<number | null>(minimumPrice);

  const handleChangeRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRangeValue(parseInt(value));
  };

  return (
    <div>
      {rangeValue}
      <input
        value={rangeValue}
        onChange={handleChangeRangeValue}
        type="range"
        min={minimumPrice}
        max={maximumPrice}
      />
    </div>
  );
};

export default DealsRangeFilter;
