import React, { useState } from "react";
import ProductCard from "../ProductCard";
import all_products from "/public/assets/ProductsList";

const ProductList = () => {
  const [search, setSearch] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(all_products);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = all_products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6 lg:p-10 bg-black text-white">
      <h1 className="font-semibold text-3xl lg:text-4xl mb-6 text-center">
        Shop
      </h1>
      <div className="m-20 flex flex-col sm:flex-row items-center justify-center gap-4">
        <label htmlFor="search" className="font-medium text-lg">
          Search:
        </label>
        <input
          type="text"
          placeholder="Search the product..."
          className="border border-orange-400 rounded-xl w-full sm:w-96 p-3 outline-none text-black"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-orange-500 text-lg mt-4">
          No products found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
