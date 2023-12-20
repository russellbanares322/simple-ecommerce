import DealsFilterButtons from "./DealsFilterButtons";
import DealsRangeFilter from "./DealsRangeFilter";
import { DealsSidebarProps } from "./type";

const DealsSidebar = ({
  selectCategory,
  productCategories,
  checkIfSelectedCategoryIsAdded,
  selectPrice,
  selectedPrice,
}: DealsSidebarProps) => {
  return (
    <div className="min-h-screen h-full w-64 border-r border-r-slate-300 p-2">
      <DealsFilterButtons
        selectCategory={selectCategory}
        productCategories={productCategories}
        checkIfSelectedCategoryIsAdded={checkIfSelectedCategoryIsAdded}
      />
      <DealsRangeFilter
        selectPrice={selectPrice}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default DealsSidebar;
