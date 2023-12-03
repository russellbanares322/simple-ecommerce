import React from "react";
import { TFilterOptionProps } from "./type";

const DealsFilterButtons: React.FC<TFilterOptionProps> = ({
  selectCategory,
  productCategories,
  checkIfSelectedCategoryIsAdded,
}) => {
  return (
    <div className="pt-14 pb-5">
      <h1 className="pb-2 text-sm font-bold">Filter by category</h1>
      <div className="flex items-center gap-3">
        {productCategories.map((filterOption: string) => (
          <div
            className={`px-3 py-1 rounded-full cursor-pointer ${
              checkIfSelectedCategoryIsAdded(filterOption)
                ? "border border-black bg-soft-green text-white"
                : "border-none bg-secondary-gray text-black"
            }`}
            key={filterOption}
            onClick={() => selectCategory(filterOption)}
          >
            <p className="font-medium text-sm">{filterOption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsFilterButtons;
