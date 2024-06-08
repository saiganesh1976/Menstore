import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-slate-900 m-10 rounded-lg px-10 py-28 text-white lg:flex justify-around ">
      <div>
        <div className=" font-semibold text-4xl">Want product news and updates?<br /> Sign up for our newsletter.</div>
      </div>
      <div>
        <div className="flex gap-5 mb-3">
        <input type="email" name="" id="" placeholder="Enter your email" required className="p-2 outline-none text-black rounded-md"/>
        <button className="bg-orange-400 p-2 rounded-lg">Subscribe</button>
        </div>
        We care about your data. Read our privacy policy.
      </div>
    </div>
  );
};

export default NewsLetter;
