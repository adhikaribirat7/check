import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="border-2 border-black  col-span-12 flex justify-evenly items-center p-2 ">
      <div className="flex justify-evenly  border-2 border-black items-center sm:basis-1/6">
        <RxHamburgerMenu className="sm:hidden block" />
        <Link to="/" className="font-extrabold sm:text-3xl text-xl">
          VINTAGE SPORTS
        </Link>
      </div>

      <div className="border-black hidden border-2 sm:flex items-center justify-center sm:basis-2/5 gap-2 p-2">
        <NavDropDown />
        <Link
          to={"/all_products"}
          className="flex border-2 w-full justify-evenly"
        >
          <span className="text-sm cursor-pointer">On sale</span>
          <span className="text-sm cursor-pointer">New arrivals</span>
          <span className="text-sm cursor-pointer">Brands</span>
        </Link>
      </div>

      <div className="border-2 border-black p-2 basis-1/4 flex items-center h-full justify-center">
        <IoIosSearch className="p-2 bg-bg-grey font-semibold h-10 rounded-l-full w-12 text-gray-500 ml-5" />
        <input
          type="text"
          className="w-full h-10 border-none outline-none  bg-bg-grey rounded-l-sm rounded-r-full"
        />
      </div>
      <div className="border-2 text-sm border-black basis-24 h-full items-center flex justify-around">
        <CiShoppingCart  className="text-xl"/>
        <IoPersonOutline className="text-xl" />
      </div>
    </div>
  );
};

export default Nav;
