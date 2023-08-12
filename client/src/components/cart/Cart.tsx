import React from "react";
import { TCartElementProps } from "../../store/cartStore/types";
import useCart from "../../store/cartStore/useCart";
import CartItems from "./CartItems";

const Cart: React.FC<TCartElementProps> = ({ isCartOpen }) => {
  const { cartItems } = useCart();
  return (
    <div
      className={`${
        !isCartOpen && "scale-0"
      } duration-200 ease-in-out absolute bg-white shadow-md px-2 py-4 right-0 rounded-md`}
    >
      <div className="w-[20rem]">
        {cartItems?.length === 0 ? (
          <p className="text-center">You have no products saved yet</p>
        ) : (
          cartItems?.map((cartItem) => (
            <CartItems
              key={cartItem.id}
              id={cartItem.id}
              thumbnail={cartItem.thumbnail}
              price={cartItem.price}
              rating={cartItem.rating}
              title={cartItem.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
