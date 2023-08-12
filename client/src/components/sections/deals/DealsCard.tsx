import React from "react";
import { TDealsProps } from "./types";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import useCart from "../../../store/cartStore/useCart";

const DealsCard: React.FC<TDealsProps> = ({
  id,
  inputPrice,
  quantity,
  title,
  description,
  price,
  rating,
  thumbnail,
}) => {
  const { cartItems, addToCart } = useCart();
  const productsData = {
    id,
    inputPrice,
    quantity,
    title,
    description,
    price,
    rating,
    thumbnail,
  };
  const isProductAdded = cartItems.some((product) => product.id === id);
  const ratingHasRemainder = rating % 2 !== 0;
  return (
    <div className="w-[22rem] h-[30rem]">
      <div className="bg-gray p-2 rounded-md relative">
        <img
          className="object-cover w-[22rem] h-[19rem] duration-300 ease-in-out rounded-md"
          src={thumbnail}
        />
        <HiOutlineHeart
          onClick={() => addToCart(productsData)}
          className={`${
            isProductAdded ? "fill-green text-green" : "text-black fill-white"
          } text-[2.3rem] shadow-lg rounded-full bg-white absolute top-5 right-6 p-2 cursor-pointer`}
        />
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-lg font-medium">₱{price}.00</p>
      </div>
      <p className="text-xs">{description}</p>
      <div className="flex items-center gap-2">
        <div className="flex justify-start items-center my-2">
          {Array.from({ length: Math.floor(rating) }).map((_, index) => (
            <RiStarFill key={index} className="text-secondary-green text-lg" />
          ))}
          {ratingHasRemainder && (
            <RiStarHalfFill className="text-secondary-green text-lg" />
          )}
        </div>
        <p className="text-xs">({rating})</p>
      </div>
      <button className="button-outlined-style my-2">Add to Cart</button>
    </div>
  );
};

export default DealsCard;
