import React from "react";

const News = () => {
  return (
    <div className="p-10">
      <div className="bg-slate-300 p-5 text-center rounded-lg shadow-lg">
        <h1 className="lg:text-5xl text-3xl m-3 font-poppins font-bold lg:m-8">Get 25% off during our one-time sale</h1>
        <p className="lg:text-2xl m-6 font-sans text-slate-600">
          Most of our products are limited releases that won't come back. Get <br />
          your favorite items while they're in stock.
        </p>
        <button className="bg-orange-500 p-3 text-slate-900 rounded-xl font-semibold hover:bg-orange-300 transition">Get access to our one-time sale</button>
      </div>
    </div>
  );
};

export default News;
