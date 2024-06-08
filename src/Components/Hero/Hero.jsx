import React from "react";
import Model_image from "../../assets/model.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-slate-100 w-full lg:h-screen lg:flex justify-between items-center p-5 lg:p-10">
      <div className="m-10">
        <h1 className="lg:text-6xl text-4xl font-semibold font-poppins mb-4">
          New Arrivals are <br /> Here.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          inventore voluptates consequuntur assumenda nulla maiores eligendi
          blanditiis quam. Ex quo fugiat nesciunt sunt libero error accusantium
          optio, tempore recusandae assumenda.
        </p>
        <Link to="/MostFav">
          <button
            className="mt-4 px-6 py-2 flex items-center gap-2 rounded-lg bg-orange-500 text-white 
          hover:bg-yellow-200 hover:text-black active:bg-orange-300 transition shadow-lg"
          >
            Shop Now <IoMdArrowForward />
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Model_image}
          alt="model_image"
          className=" w-88 p-10 lg:w-10/12 lg:p-5"
        />
      </div>
    </div>
  );
};

export default Hero;
