import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { TDropdownProps } from "./types";
const Dropdown: React.FC<TDropdownProps> = ({
  open,
  handleToggleDropdown,
  items,
}) => {
  const navigate = useNavigate();

  const handleClickAction = (action: string | (() => void) | void) => {
    handleToggleDropdown();
    if (typeof action === "string") {
      navigate(action);
    } else if (typeof action === "function") {
      action();
    }
  };

  return (
    <div>
      <HiOutlineChevronDown
        onClick={handleToggleDropdown}
        className={`${
          open ? "rotate-180" : "rotate-0"
        } cursor-pointer duration-300 ease-in-out`}
        size={24}
      />
      <div
        className={`${
          !open && "scale-0"
        } duration-300 ease-in-out absolute right-0 top-6 bg-white text-black py-1 rounded-md shadow-md`}
      >
        {items.map((item) => (
          <ul key={item.name}>
            <li
              onClick={() => handleClickAction(item.action)}
              className="cursor-pointer my-1 hover:bg-soft-green hover:text-white duration-100 ease-in-out px-5 py-1 rounded-md"
            >
              {item.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
