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
  };

  return (
    <div className="py-14 flex items-center gap-3">
      {filterOptions.map((filterOption: string) => (
        <div
          className={`bg-secondary-gray px-3 py-1 rounded-full cursor-pointer`}
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
