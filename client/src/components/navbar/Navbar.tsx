import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiX,
} from "react-icons/hi";
import useCart from "../../store/cartStore/useCart";
import Cart from "../cart/Cart";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { cart } = useCart();
  const cartLength = cart.length;
  const handleOpenNavbar = () => {
    setIsNavOpen(true);
  };
  const handleCloseNavbar = () => {
    setIsNavOpen(false);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  return (
    <nav className="lg:flex lg:items-center page-margin-x pt-5 pb-4 z-50">
      <div className="flex justify-between items-center lg:mr-[5rem]">
        <div className="flex items-center gap-2">
          <img className="w-11 h-11" src={logo} />
          <h1 className="font-bold text-2xl">Shopcart</h1>
        </div>
        {!isNavOpen && (
          <HiMenu
            onClick={handleOpenNavbar}
            className="text-2xl visible lg:hidden cursor-pointer"
          />
        )}
        {isNavOpen && (
          <HiX
            onClick={handleCloseNavbar}
            className="text-2xl visible lg:hidden cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${
          isNavOpen ? "translate-y-0" : "translate-y-[-200%]"
        } pb-7 lg:pb-0 shadow-md lg:shadow-none border-t border-t-soft-green lg:border-none mt-2 pt-5 lg:pt-0 lg:mt-0 bg-white lg:translate-y-0 lg:h-full lg:opacity-100 absolute left-0 z-50 flex w-full flex-col items-center transition-all duration-300 ease-in-out lg:static lg:flex lg:justify-start lg:flex-row lg:items-center gap-7 text-sm`}
      >
        <ul className="flex-col lg:flex-row lg:flex lg:items-center gap-9 text-[0.95rem] mr-0 lg:mr-auto font-medium">
          <li className="cursor-pointer my-5 lg:my-0">Category</li>
          <li className="cursor-pointer my-5 lg:my-0">Deals</li>
          <li className="cursor-pointer my-5 lg:my-0">What's New</li>
          <li className="cursor-pointer">Delivery</li>
        </ul>
        <div className="mr-2 lg:mr-auto relative">
          <input
            className="rounded-full px-4 py-2 text-sm w-80 outline-none border border-neutral-400"
            placeholder="Search product"
          />
          <HiOutlineSearch className="absolute top-[0.55rem] right-6 text-xl" />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-[0.95rem] flex items-center gap-2 font-medium cursor-pointer">
            <HiOutlineUser className="text-xl" />
            Account
          </p>
          <div className="relative">
            <p
              onClick={handleToggleCart}
              after-dynamic-value={cartLength}
              className={`${
                cartLength === 0 ? "after:hidden" : "after:block"
              } text-[0.95rem] flex items-center gap-2 font-medium cursor-pointer relative after:absolute after:-top-2 after:px-2 after:py-[0.12rem] after:-right-6 after:bg-soft-green after:text-white after:rounded-full after:text-xs after:content-[attr(after-dynamic-value)] after:cursor-auto`}
            >
              <HiOutlineShoppingCart className="text-xl" />
              Cart
            </p>
            <Cart isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
