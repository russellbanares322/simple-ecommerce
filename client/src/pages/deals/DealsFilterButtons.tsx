import React from "react";
import { TFilterOptionProps } from "./type";

const DealsFilterButtons: React.FC<TFilterOptionProps<string[]>> = ({
  filterOptions,
  selectedFilterOptions,
  setSelectedFilterOptions,
}) => {
  const handleSelectCategory = (selectedFilterOption: string) => {
    const isSelectedCategoryAdded =
      selectedFilterOptions.includes(selectedFilterOption);
    const filteredSelectedOption = selectedFilterOptions.filter(
      (filterOption) => filterOption !== selectedFilterOption
    );
    if (isSelectedCategoryAdded) {
      setSelectedFilterOptions(filteredSelectedOption);
    } else {
      setSelectedFilterOptions([
        ...selectedFilterOptions,
        selectedFilterOption,
      ]);
    }
  };

  const checkIfOptionIsAdded = (optionName: string) => {
    const isOptionAdded = selectedFilterOptions.includes(optionName);
    if (!isOptionAdded) {
      return false;
    }
    return true;
  };

  return (
    <div className="pt-14 pb-5 flex items-center gap-3">
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
  );
};

export default DealsFilterButtons;
