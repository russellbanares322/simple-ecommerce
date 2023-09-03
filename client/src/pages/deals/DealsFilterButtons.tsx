import React from "react";
import { TFilterOptionProps } from "./type";

const DealsFilterButtons: React.FC<TFilterOptionProps<string[]>> = ({
  filterOptions,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleSelectCategory = (selectedFilterOption: string) => {
    const isSelectedCategoryAdded =
      selectedCategories.includes(selectedFilterOption);
    const filteredSelectedOption = selectedCategories.filter(
      (filterOption) => filterOption !== selectedFilterOption
    );
    if (isSelectedCategoryAdded) {
      setSelectedCategories(filteredSelectedOption);
    } else {
      setSelectedCategories([...selectedCategories, selectedFilterOption]);
    }
  };

  const checkIfOptionIsAdded = (optionName: string) => {
    const isOptionAdded = selectedCategories.includes(optionName);
    if (!isOptionAdded) {
      return false;
    }
    return true;
  };

  return (
    <div className="pt-14 pb-5">
      <h1 className="pb-2 text-sm font-bold">Filter by category</h1>
      <div className="flex items-center gap-3">
        {filterOptions.map((filterOption: string) => (
          <div
            className={`px-3 py-1 rounded-full cursor-pointer ${
              checkIfOptionIsAdded(filterOption)
                ? "border border-black bg-soft-green text-white"
                : "border-none bg-secondary-gray text-black"
            }`}
            key={filterOption}
            onClick={() => handleSelectCategory(filterOption)}
          >
            <p className="font-medium text-sm">{filterOption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsFilterButtons;
