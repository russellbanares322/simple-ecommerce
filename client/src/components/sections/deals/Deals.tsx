import React, { useEffect } from "react";
import useProduct from "../../../store/productStore/useProduct";
import DealsCard from "./DealsCard";
import { TDealsProps } from "./types";

const Deals: React.FC = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const dealsData: TDealsProps[] = products.slice(0, 6).map((item: any) => ({
    id: item.id,
    inputPrice: item.inputPrice,
    quantity: item.quantity,
    title: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
    thumbnail: item.thumbnail,
  }));

  return (
    <div className="section-padding max-w-[1640px]">
      <p className="section-title">Todays Best Deals For You</p>
      <div className="grid md:grid-cols-3 gap-6">
        {dealsData?.map((deal) => (
          <DealsCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
