import React from "react";
import { TCartItemProps } from "./types";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

const CartItems: React.FC<TCartItemProps> = ({
  id,
  title,
  rating,
  price,
  thumbnail,
}) => {
  const ratingHasRemainder = rating % 2 !== 0;
  return (
    <div
      className="flex justify-between items-center border-b border-b-gray pb-2"
      key={id}
    >
      <div className="flex items-center gap-3">
        <img className="h-10 w-10 object-cover" src={thumbnail} alt="product" />
        <p className="font-medium">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex justify-start items-center my-2">
          {Array.from({ length: Math.floor(rating) }).map((_, index) => (
            <RiStarFill key={index} className="text-secondary-green text-sm" />
          ))}
          {ratingHasRemainder && (
            <RiStarHalfFill className="text-secondary-green text-sm" />
          )}
        </div>
        <p className="text-xs">({rating})</p>
      </div>
      <div>
        <p className="font-medium">₱{price}.00</p>
      </div>
    </div>
  );
};

export default CartItems;
