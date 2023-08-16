import React from "react";
import { TDealsProps } from "./types";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import useCart from "../../../store/cartStore/useCart";
import { motion } from "framer-motion";

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
  const isProductInCart = cartItems.some((cartItem) => cartItem.id === id);
  const ratingHasRemainder = rating % 2 !== 0;
  return (
    <motion.div layout className="max-w-[1640px] py-4">
      <div className="bg-gray p-2 rounded-md relative">
        <img
          className="object-cover h-[19rem] w-full duration-300 ease-in-out rounded-md"
          src={thumbnail}
        />
        <HiOutlineHeart
          onClick={() => addToCart(productsData)}
          className=" text-[2.3rem] shadow-lg rounded-full bg-white absolute top-5 right-6 p-2"
        />
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-lg font-medium">₱{price.toLocaleString()}</p>
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
      <button
        onClick={() => addToCart(productsData)}
        className="button-outlined-style my-2"
      >
        {isProductInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </motion.div>
  );
};

export default DealsCard;
