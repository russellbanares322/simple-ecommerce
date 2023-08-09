import React, { useEffect, useState } from "react";
import getProducts from "../../../proxies/getProducts";

type TCategories = {
  category: string;
  thumbnail: string;
};

const CategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<TCategories[]>([]);

  const getProductCategories = async () => {
    const data = await getProducts();
    const categoriesData = data.map((item: any) => ({
      category: item.category,
      thumbnail: item.thumbnail,
    }));
    const randomlySortedCategories = [...categoriesData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    setCategories(randomlySortedCategories);
  };

  useEffect(() => {
    getProductCategories();
  }, []);
  return (
    <div className="section-padding-y page-padding-x">
      <p className="section-title">Shop Our Top Categories</p>
      <div className="my-6 grid grid-cols md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 justify-center align-middle">
        {categories.map((categoryData, index) => (
          <div className="mt-6" key={index}>
            <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-[16rem] h-[15rem] object-cover hover:scale-[1.1] duration-200 ease-in-out"
                src={categoryData.thumbnail}
              />
              <p className="uppercase absolute top-2 text-black font-medium left-2 text-sm bg-cyan px-2">
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
