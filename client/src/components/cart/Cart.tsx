import React from "react";
import { TCartElementProps } from "../../store/cartStore/types";

const Cart: React.FC<TCartElementProps> = ({ isCartOpen }) => {
  return (
    <div
      className={`${
        !isCartOpen && "scale-0"
      } duration-200 ease-in-out absolute bg-white shadow-md px-2 py-4 right-0`}
    >
      asdasdasdasdasdasdasdasdasds
    </div>
  );
};

export default Cart;
