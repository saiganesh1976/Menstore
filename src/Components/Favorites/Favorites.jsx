import React from "react";
import Clothing from "../../assets/product_2.png";
import Footware from "../../assets/product_25.avif";
import Watches from "../../assets/product_31.avif";
import Caps from "../../assets/product_37.webp";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Top Trending</h1>
        <span>
          <Link
            to="/MostFav"
            className="flex items-center font-semibold gap-1 text-orange-500"
          >
            Browse all Favorites <IoIosArrowDropright />
          </Link>
        </span>
      </div>
      <div className="lg:flex items-center gap-12 py-10">
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={Clothing}
              alt="Image Clothing"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              PUMA Melo Iridescent Zip-Front Biker Jacket
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                &#8377;. 5999
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">
                &#8377;. 5999
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={Footware}
              alt="Image Clothing"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              ADIDAS Adilaska Lace-Up Running Shoes
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                &#8377;. 5999
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">
                &#8377;. 5999
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={Watches}
              alt="Image Clothing"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              UNIQUEST Black Dial Analogue Fashion Watch
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                &#8377;. 5999
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">
                &#8377;. 5999
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={Caps}
              alt="Image Clothing"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              ARMANI EXCHANGE Men Baseball Cap
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                &#8377;. 5999
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">
                &#8377;. 5999
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
