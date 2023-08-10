import React, { useEffect, useState } from "react";
import getProducts from "../../../proxies/getProducts";
import DealsCard from "./DealsCard";
import { TDeals } from "./types";

const Deals: React.FC = () => {
  const [deals, setDeals] = useState<TDeals[]>([]);

  const getDeals = async () => {
    const data = await getProducts();
    const dealsData = data?.slice(0, 6).map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      rating: item.rating,
    }));

    setDeals(dealsData);
  };

  useEffect(() => {
    getDeals();
  }, []);
  return (
    <div className="section-padding-y page-padding-x">
      <p className="section-title">Shop Our Top Categories</p>
      <div>
        {deals?.map((deal) => (
          <DealsCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
