import React, { useState,useContext } from "react";
import logo from "../../assets/logo.png";
import Cart_icon from "../../assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center z-50 shadow-xl bg-orange-500 text-white px-5 lg:px-20 py-3">
        <div className="flex items-center font-semibold">
          <img src={logo} alt="logo" className="mr-3" />
          <h1 className="text-3xl font-bold">MenStore.</h1>
        </div>

        <div className="hidden lg:flex items-center justify-center font-semibold">
          <ul className="flex gap-8 mr-16">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MostFav"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Shop
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/Clothing"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Footwear"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Footwear
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Accessories"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Accessories
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                About 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FAQs"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-400 ease-in ${
                    isActive
                      ? "text-black hover:border-b-2 border-white"
                      : "text-white"
                  } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center font-semibold">
          <Link to="/Login">
            <button
              type="button"
              className="bg-transparent hover:bg-orange-200 text-white-700 font-semibold hover:text-orange-500 py-2 px-4 border border-white-500 hover:border-transparent rounded"
            >
              Login
            </button>
          </Link>
          <div className="relative">
            <Link to="/Cart">
              <img src={Cart_icon} className="ml-4 w-9" alt="cart" />
              <div className="absolute bottom-5 left-9 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {cartCount}
              </div>
            </Link>
          </div>
        </div>

        <button
          className="lg:hidden block transition text-2xl"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {click && (
        <div className="lg:hidden absolute top-26 w-full z-50 left-0 right-0 bg-orange-500 text-white transition">
          <ul className="text-center text-xl p-4">
            <li className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded">
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded">
              <Link to="/Clothing" onClick={handleClick}>
                Clothing
              </Link>
            </li>
            <li className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded">
              <Link to="/Footwear" onClick={handleClick}>
                Footwear
              </Link>
            </li>
            <li className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded">
              <Link to="/Accessories" onClick={handleClick}>
                Accessories
              </Link>
            </li>
            <li className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded">
              <Link to="/Cart" onClick={handleClick}>
                Cart
              </Link>
            </li>
            <li className="my-4 py-2">
              <Link to="/Login" onClick={handleClick}>
                <button
                  type="button"
                  className="w-full py-2 rounded-lg bg-white text-black hover:bg-yellow-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-white"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
