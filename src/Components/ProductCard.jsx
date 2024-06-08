import React from "react";
import star_icon from "../assets/star_icon.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="overflow-hidden">
          <img
            className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="px-6 py-4">
          <div>{product.brand}</div>
          <div className=" font-semibold lg:text-lg text-xs mb-2 md:text-sm">
            {product.name}
          </div>
          <div className="bg-gray-200 max-w-fit text-xs p-1 my-2 rounded-lg text-gray-700  lg:text-base flex items-center">
            {product.rating} <img src={star_icon} className="lg:w-4 w-3 mx-2" />
            {product.comments}{" "}
          </div>
          <p className="text-gray-700 text-xs lg:text-base">
            <span className="mr-2 ">&#8377;. {product.new_price}</span>
            <span className="line-through">&#8377;. {product.old_price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
