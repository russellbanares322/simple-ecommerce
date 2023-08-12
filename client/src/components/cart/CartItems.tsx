import React from "react";
import { TCartItemProps } from "./types";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { HiPlus, HiMinus } from "react-icons/hi";
import useCart from "../../store/cartStore/useCart";

const CartItems: React.FC<TCartItemProps> = ({
  id,
  inputPrice,
  quantity,
  title,
  rating,
  thumbnail,
}) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  const ratingHasRemainder = rating % 2 !== 0;
  const iconStyle = "text-white text-lg";
  const buttonStyle = "bg-soft-green p-1 rounded-md";

  return (
    <div className="border-b border-b-gray pb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-cover rounded-md"
            src={thumbnail}
            alt="product"
          />
          <p className="font-medium">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex justify-start items-center my-2">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <RiStarFill
                key={index}
                className="text-secondary-green text-sm"
              />
            ))}
            {ratingHasRemainder && (
              <RiStarHalfFill className="text-secondary-green text-sm" />
            )}
          </div>
          <p className="text-xs">({rating})</p>
        </div>
        <div>
          <p className="font-medium">₱{inputPrice}.00</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-2">
        <button
          onClick={() => decreaseQuantity(id, quantity)}
          className={buttonStyle}
        >
          <HiMinus className={iconStyle} />
        </button>
        <p className="font-bold text-lg">{quantity}</p>
        <button onClick={() => increaseQuantity(id)} className={buttonStyle}>
          <HiPlus className={iconStyle} />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
