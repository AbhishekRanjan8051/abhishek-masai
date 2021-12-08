import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
// import { Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Nvabar";
import Product from "./Products";

function Main() {
  const Name = () => {
    return <h1>Name Page</h1>;
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/name" element={<Name />} />

        <Route element={<Error />} />
      </Routes>
  
    </div>
  );
}
export default Main;
