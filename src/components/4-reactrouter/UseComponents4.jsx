import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Info from "../../pages/Info";
import NotFound from "../../pages/NotFound";
import Product from "../../pages/Product";
import Search from "../../pages/Search";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const UseComponents4 = () => {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/products/:id/info" element={<Info />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default UseComponents4;
