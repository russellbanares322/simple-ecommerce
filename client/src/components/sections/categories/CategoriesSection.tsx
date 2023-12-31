import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../../api/productsApi";
import { TProducts } from "../../../api/types";
import { TCategories } from "./types";

const CategoriesSection: React.FC = () => {
  const { data: products } = useQuery<TProducts[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const categoriesData = products?.map((item: any) => ({
    id: item.id,
    category: item.category,
    thumbnail: item.thumbnail,
  }));
  const randomlySortedCategories: TCategories[] = [...(categoriesData || [])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="section-padding-y max-w-[1640px] section-padding mx-auto">
      <p className="section-title">Shop Our Top Categories</p>
      <div className="mt-10 grid grid-cols md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 justify-center align-middle">
        {randomlySortedCategories.map((categoryData) => (
          <div key={categoryData.id}>
            <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
              <img
                className="img-style object-cover hover:scale-[1.1] duration-200 ease-in-out"
                src={categoryData.thumbnail}
              />
              <p className="uppercase absolute top-2 text-white font-medium left-2 text-sm bg-secondary-green px-2">
                {categoryData.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
