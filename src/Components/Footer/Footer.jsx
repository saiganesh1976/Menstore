import React from "react";
import logo from "../../assets/logo_big.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around font-sans items-start p-6 lg:p-20 bg-slate-800">
          <div className="flex items-center lg:mr-24">
            <img src={logo} alt="logo" className="mr-3" />
            <h1 className="text-3xl font-bold text-slate-300">MenStore.</h1>
          </div>
          <div className="lg:flex flex-col mt-6 lg:mt-0 lg:flex-row gap-6 lg:gap-28 grid grid-cols-2 ml-8">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-slate-300">Links</h1>
              <ul className="text-slate-500">
                <li className="cursor-pointer hover:text-slate-400">
                  <Link to="/MostFav">Shop</Link>
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  <Link to="/About">About</Link>
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  <Link to="/FAQs">FAQs</Link>
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-slate-300">Company</h1>
              <ul className="text-slate-500">
                <li className="cursor-pointer hover:text-slate-400">
                  Who we are
                </li>
                <li className="cursor-pointer hover:text-slate-400">Careers</li>
                <li className="cursor-pointer hover:text-slate-400">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-slate-400">Privacy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-slate-300">Customer Service</h1>
              <ul className="text-slate-500">
                <li className="cursor-pointer hover:text-slate-400">Contact</li>
                <li className="cursor-pointer hover:text-slate-400">
                  Shipping
                </li>
                <li className="cursor-pointer hover:text-slate-400">Returns</li>
                <li className="cursor-pointer hover:text-slate-400">
                  Warrenty
                </li>
                <li className="cursor-pointer hover:text-slate-400">FAQ</li>
                <li className="cursor-pointer hover:text-slate-400">
                  Find a store
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-slate-300">Follow Us</h1>
              <ul className="text-slate-500">
                <li className="cursor-pointer hover:text-slate-400">
                  Facebook
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  X
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  Intagram
                </li>
                <li className="cursor-pointer hover:text-slate-400">
                  Pintrest
                </li>
              </ul>
            </div>
          </div>
        </div>
      <div className="bg-slate-900 text-slate-600 p-3 text-center">
        <h1 className="text-sm lg:text-md">
          Copyright &copy; 2024 Created by Sai Ganesh Ratnala. All Rights are
          Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
