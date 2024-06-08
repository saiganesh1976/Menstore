import React from "react";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Favorites from "../Favorites/Favorites";
import Features from "../Features/Features";
import News from "../Newslayout/News";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Favorites />
      <Features />
      <NewsLetter/>
      <News />
    </>
  );
};

export default Home;
