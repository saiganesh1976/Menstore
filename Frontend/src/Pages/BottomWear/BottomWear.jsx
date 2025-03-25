import React, { useState, useContext, useEffect } from "react";
import ProductCard from "../../Components/ProductCard";
import BottomWearList from "/public/assets/BottomWearitems.js"; // Renamed from JeansList
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import CategoriesList from "../../Components/CategoriesList/BottomWearCat";

const BottomWear = () => {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(BottomWearList);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("All");

  const productsPerPage = 8;

  // Search & Filter Logic
  useEffect(() => {
    let filtered = BottomWearList;

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [search, category]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div
      className={`p-6 lg:p-10 min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="font-semibold text-3xl lg:text-4xl mb-6 text-center">
        Bottom Wear
      </h1>

      {/* Category List */}
      <CategoriesList category={category} setCategory={setCategory} />

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 mt-8">
        <label htmlFor="search" className="font-medium text-lg">
          Search:
        </label>
        <input
          type="text"
          placeholder="Search for a product..."
          className={`border rounded-xl w-full sm:w-96 p-3 outline-none transition ${
            theme === "dark"
              ? "border-orange-500 bg-gray-900 text-white"
              : "border-orange-400 bg-white text-black"
          }`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      {currentProducts.length === 0 ? (
        <p className="text-center text-orange-500 text-lg mt-4">
          No products found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-6">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {indexOfFirstProduct + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {Math.min(indexOfLastProduct, filteredProducts.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredProducts.length}
            </span>{" "}
            Products
          </span>
          <div className="inline-flex mt-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 h-10 text-base font-medium text-white bg-gray-800 border-l border-gray-700 rounded-r hover:bg-gray-900 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomWear;
