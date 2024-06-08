import React, { useState } from "react";
import ProductCard from "../ProductCard";
import all_products from "../../assets/ProductsList";

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
    <div className="p-10">
      <h1 className="font-semibold text-4xl mb-6 text-center">
        Shop
      </h1>
      <div className="m-5 flex items-center justify-center">
        <label htmlFor="serach" className="font-medium">Search Product:</label>
        <input
          type="text"
          placeholder="Search the product..."
          className=" border border-orange-400 rounded-xl w-96 p-3 mx-3 block outline-none"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-orange-500">No products found.</p>
      ) : (
        <div className="grid gap-10 md:gap-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
