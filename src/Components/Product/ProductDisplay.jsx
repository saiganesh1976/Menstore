import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import productList from "../../assets/ProductsList";
import star_icon from "../../assets/star_icon.png";
import dull_start_icon from "../../assets/star_dull_icon.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductDisplay = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));
  // const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    // if (selectedSize) {
    //   addToCart(product, selectedSize);
    // } else {
    //   alert("Please select a size");
    // }
    addToCart(product);
  };

  return (
    <div className="lg:p-10 p-5">
      <div className="lg:flex justify-evenly">
        <div>
          <img src={product.image} alt={product.name} className="mb-6" />
        </div>
        <div>
          <h1 className="mb-2">{product.brand}</h1>
          <h1 className="font-semibold text-2xl mb-6">{product.name}</h1>
          <div className="bg-gray-200 max-w-fit p-1 my-2 rounded-lg text-gray-700 text-base flex items-center">
            {product.rating} <img src={star_icon} className="w-4 mx-2" />
            {product.comments}
            {" Ratings"}
          </div>{" "}
          <div className="text-gray-700 text-base my-10 mb-5">
            <span className="text-orange-500 text-3xl font-medium">
              &#8377;. {product.new_price}
            </span>
            <span className="line-through ml-2">
              &#8377;. {product.old_price}
            </span>
            <br />
            <span className=" font-regular">Prices inclusive of all taxes</span>
            <h1 className="font-semibold">Free delivery Available</h1>
          </div>
          <div className="mb-5">
            <h1 className="font-semibold text-xl text-green-600 mb-2">
              In Stock{" "}
            </h1>
            <div className="text-slate-600">Ship from MenStore.</div>
          </div>
          <div className="mb-5">
            <h1 className=" font-semibold mb-2">Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              obcaecati illo, earum inventore <br /> fugit enim voluptates.
              Deleniti quod sint ea <br /> ipsa, minima error illum, pariatur
              debitis voluptatibus accusamus corporis iure?
            </p>
          </div>
          <div className="my-10 mt-5">
            <h1 className="font-semibold mb-2">Product Details</h1>
            <ul className=" list-disc">
              <li className="ml-6">Product Code: {product.id}</li>
              <li className="ml-6">Package contains: 1 Item</li>
              <li className="ml-6">Country of Origin: India</li>
            </ul>
          </div>
          {/* <div className="my-10">
            <h1 className="font-semibold mb-6">Select Sizes</h1>
            <ul className=" flex w-1 lg:flex gap-4 lg:gap-7">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <li
                  key={size}
                  className={`bg-slate-100 px-3 py-2 lg:px-6 lg:py-3 rounded-md border-2 ${
                    selectedSize === size ? "border-black" : "border-gray-400"
                  } font-medium cursor-pointer shadow-lg`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <Link to="/cart">
              <button
                className="bg-orange-400 p-2 w-80 text-white font-medium rounded-md"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="font-semibold flex text-2xl"> Recent Reviews</h1>
        <div className="mt-8 lg:grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-6 rounded-md shadow-xl bg-slate-100 mb-10">
            <h4>Risako M</h4>
            <p className=" text-slate-400">April 6, 2021</p>
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={dull_start_icon} alt="" className="w-4 h-4" />
              </div>
              <div>Good Product</div>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              dolore nesciunt fugiat eius praesentium minus, dignissimos quae!
              Deserunt a nostrum nam autem, sequi dolorem, rem nihil magnam
              eaque fugiat voluptas? Dolorem, corrupti! Iste, ea soluta!
              Consequatur inventore voluptatibus perferendis tempora.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-md shadow-xl bg-slate-100 mb-10">
            <h4>Jackie H</h4>
            <p className=" text-slate-400">April 6, 2021</p>
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={dull_start_icon} alt="" className="w-4 h-4" />
                <img src={dull_start_icon} alt="" className="w-4 h-4" />
              </div>
              <div>Good Product</div>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              dolore nesciunt fugiat eius praesentium minus, dignissimos quae!
              Deserunt a nostrum nam autem, sequi dolorem, rem nihil magnam
              eaque fugiat voluptas? Dolorem, corrupti! Iste, ea soluta!
              Consequatur inventore voluptatibus perferendis tempora.
            </div>
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-md shadow-xl bg-slate-100 mb-10">
            <h4>Laura G</h4>
            <p className=" text-slate-400">April 6, 2021</p>
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
                <img src={star_icon} alt="" className="w-4 h-4" />
              </div>
              <div>Good Product</div>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              dolore nesciunt fugiat eius praesentium minus, dignissimos quae!
              Deserunt a nostrum nam autem, sequi dolorem, rem nihil magnam
              eaque fugiat voluptas? Dolorem, corrupti! Iste, ea soluta!
              Consequatur inventore voluptatibus perferendis tempora.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
