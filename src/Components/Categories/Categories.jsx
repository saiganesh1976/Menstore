import React from "react";
import { Link } from "react-router-dom";
import Clothing from "../../assets/product_2.png";
import Footwear from "../../assets/product_25.avif";
import Watches from "../../assets/product_31.avif";
import Caps from "../../assets/product_37.webp";
import Accessories from "../../assets/product_34.avif";

const Categories = () => {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl">Our Collections</h1>
      <div className="lg:flex items-center gap-12 py-10">
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={Clothing}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Clothing
              </div>
            </div>
          </Link>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={Footwear}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Footwear
              </div>
            </div>
          </Link>
        </div>
        <div class="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={Watches}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Watches
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={Caps}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">Caps</div>
            </div>
          </Link>
        </div>

        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={Accessories}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Accessiores
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
