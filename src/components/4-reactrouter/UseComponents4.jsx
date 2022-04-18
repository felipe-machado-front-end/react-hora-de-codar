import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Navbar from "./Navbar";

const UseComponents4 = () => {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default UseComponents4;
