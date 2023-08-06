import logo from "../../assets/logo.png";
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full gap-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img className="h-12 w-14 object-contain" src={logo} alt="logo" />
          <h1 className="font-bold text-xl text-soft-green cursor-pointer">
            Shopcart
          </h1>
        </div>
        <HiMenu className="text-xl visible md:hidden" />
      </div>
      <ul className="hidden md:flex md:justify-center md:items-center gap-7 ml-5 text-sm font-medium">
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Deals</li>
        <li className="cursor-pointer">What's New</li>
        <li className="cursor-pointer">Delivery</li>
      </ul>
      <div className="relative hidden md:block">
        <input
          className="bg-gray px-5 py-2 rounded-full outline-none text-sm w-72 font-medium"
          placeholder="Search product"
          type="text"
        />
        <HiOutlineSearch className="text-lg absolute top-[0.6rem] right-5" />
      </div>
      <div className="justify-center items-center gap-5 text-sm font-medium hidden md:flex">
        <p className="flex gap-1 cursor-pointer">
          <HiOutlineUser className="text-lg" />
          Account
        </p>
        <p className="flex gap-1 cursor-pointer">
          <HiOutlineShoppingCart className="text-lg" />
          Cart
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
