import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Product";
import Cart from "./components/Cart";
import ProductContextProvider from "./Global/productContext";
import Footer from "./components/Footer";
import CartContextProvider from "./Global/cartContext";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="flex-grow pt-16">
            {" "}
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" exact element={<Cart />} />
            </Routes>
          </div>
          <Footer />{" "}
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
