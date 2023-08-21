import React, { useEffect } from "react";
import useProduct from "../../../store/productStore/useProduct";
import DealsCard from "./DealsCard";
import DealsSkeletonLoader from "./DealsSkeletonLoader";
import { TDealsProps } from "./types";

const Deals: React.FC = () => {
  const { getProducts, products, isLoading } = useProduct();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const dealsData: TDealsProps[] = products.slice(0, 6).map((item: any) => ({
    id: item.id,
    inputPrice: item.inputPrice,
    category: item.category,
    quantity: item.quantity,
    title: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  }));

  return (
    <div className="section-padding max-w-[1640px] mx-auto min-h-[100vh]">
      <p className="section-title">Todays Best Deals For You</p>
      {<DealsSkeletonLoader loaderLength={dealsData.length} />}
      <div className="grid md:grid-cols-3 gap-6">
        {!isLoading &&
          dealsData?.map((deal) => <DealsCard key={deal.id} {...deal} />)}
      </div>
    </div>
  );
};

export default Deals;
