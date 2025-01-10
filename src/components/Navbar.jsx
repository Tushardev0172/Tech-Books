import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from "../Global/cartContext";

const Navbar = ({ cartToggle }) => {
  const { shoppingCart } = useContext(cartContext);
  return (
    <nav className="w-full bg-[#efefef] py-4 border-b-2 fixed z-10">
      <ul className="mx-auto w-[90%] flex justify-between items-center">
        <li className="font-title text-primary text-2xl font-bold">
          <Link to="/">Tech Books</Link>
        </li>
        <li onClick={cartToggle}>
          {" "}
          <Link to="/cart" className="flex items-center gap-4">
            <span>
              <FaCartShopping className="text-[25px] font-bold" />
            </span>
            <span className="w-[35px] h-[35px] bg-[#ec1313] rounded-[50%] text-[#fff] cursor-pointer text-center text-[13px] flex justify-center items-center font-bold">
              {shoppingCart ? shoppingCart.length : 0}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
