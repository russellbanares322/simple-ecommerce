import React from "react";
import { TDeals } from "./types";
import { HiStar } from "react-icons/hi";

const DealsCard: React.FC<TDeals> = ({
  id,
  title,
  description,
  price,
  rating,
  thumbnail,
}) => {
  return (
    <div className="w-[22rem] h-[30rem]">
      <div className="bg-gray p-2 rounded-md">
        <img
          className="object-cover w-[22rem] h-[19rem] duration-300 ease-in-out rounded-md"
          src={thumbnail}
        />
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-lg font-medium">{price}</p>
      </div>
      <p className="text-xs">{description}</p>
      <div className="flex items-center gap-2">
        <div className="flex justify-start items-center my-2">
          {Array.from({ length: Math.floor(rating) }).map((_) => (
            <HiStar key={id} className="text-secondary-green text-lg" />
          ))}
        </div>
        <p className="text-xs">({rating})</p>
      </div>
      <button className="button-outlined-style my-2">Add to Cart</button>
    </div>
  );
};

export default DealsCard;
