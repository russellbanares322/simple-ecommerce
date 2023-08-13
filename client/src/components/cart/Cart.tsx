import React from "react";
import useCart from "../../store/cartStore/useCart";
import CartItems from "./CartItems";
import { TCartElementProps } from "./types";

const Cart: React.FC<TCartElementProps> = ({ isCartOpen }) => {
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;
  const cartItemsTotal = cartItems.reduce(
    (prevVal, cartItem) => prevVal + cartItem.inputPrice,
    0
  );

  return (
    <div
      className={`${
        !isCartOpen && "scale-0"
      } duration-200 ease-in-out absolute bg-white shadow-md px-2 py-4 right-0 rounded-md`}
    >
      <div className="w-[20rem]">
        {isCartEmpty ? (
          <p className="text-center">You have no products saved yet</p>
        ) : (
          cartItems?.map((cartItem) => (
            <CartItems
              key={cartItem.id}
              inputPrice={cartItem.inputPrice}
              quantity={cartItem.quantity}
              id={cartItem.id}
              thumbnail={cartItem.thumbnail}
              price={cartItem.price}
              rating={cartItem.rating}
              title={cartItem.title}
            />
          ))
        )}
        {!isCartEmpty && (
          <p className="text-right">
            Total:{" "}
            <span className="font-semibold">
              ₱{cartItemsTotal.toLocaleString()}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
