import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/Pages/About";
import FAQs from "./Components/Pages/FAQs";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Cart from "./Components/Pages/Cart";
import MostFav from "./Components/Shop/MostFav";
import Signup from "./Components/Pages/Signup";
import ProductDisplay from "./Components/Product/ProductDisplay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MostFav" element={<MostFav />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDisplay />} />
        <Route path="/products/:category/:id" element={<ProductDisplay />} />         

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
