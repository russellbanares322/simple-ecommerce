import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../../api/productsApi";
import { Product } from "../../../api/types";
import DealsCard from "./DealsCard";
import DealsSkeletonLoader from "./DealsSkeletonLoader";

const Deals: React.FC = () => {
  const { data: products, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const dealsData = products?.slice(0, 6).map((item: any) => ({
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
    <div className="page-layout min-h-[100vh]">
      <p className="section-title">Todays Best Deals For You</p>
      {isLoading && <DealsSkeletonLoader loaderLength={6} />}
      <div className="grid md:grid-cols-3 gap-6">
        {!isLoading &&
          dealsData?.map((deal) => <DealsCard key={deal.id} {...deal} />)}
      </div>
    </div>
  );
};

export default Deals;
