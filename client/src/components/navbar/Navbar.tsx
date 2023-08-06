import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
function Navbar() {
  return (
    <navbar className="flex justify-between items-center w-full gap-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img className="h-12 w-14 object-contain" src={logo} alt="logo" />
          <h1 className="font-bold text-lg">Shopcart</h1>
        </div>
        <HiMenu className="text-xl hidden" />
      </div>
      <ul className="md:flex md:justify-center md:items-center gap-5 ml-5 text-sm font-medium">
        <li>Categories</li>
        <li>Deals</li>
        <li>What's New</li>
        <li>Delivery</li>
      </ul>
      <div className="relative">
        <input
          className="bg-gray px-5 py-2 rounded-full outline-none text-sm w-72 font-medium"
          placeholder="Search product"
          type="text"
        />
      </div>
      <div className="flex justify-center items-center gap-5 text-sm font-medium">
        <p>Account</p>
        <p>Cart</p>
      </div>
    </navbar>
  );
}

export default Navbar;
