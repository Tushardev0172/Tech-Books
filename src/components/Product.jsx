import React, { useContext } from "react";
import Banner from "./Banner";
import { productContext } from "../Global/productContext";
import { cartContext } from "../Global/cartContext";

const Products = () => {
  const { products } = useContext(productContext);
  const { dispatch } = useContext(cartContext);

  return (
    <div>
      <Banner />
      <h1
        style={{
          textAlign: "center",
          textShadow: "1px 1px 0px gray",
          marginTop: "20px",
        }}
        className="text-6xl font-semibold"
      >
        Latest Products
      </h1>
      <div
        className="w-[90%] mx-auto grid gap-6 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-4"
        style={{ marginTop: "30px" }}
      >
        {products.map((product) => (
          <div
            className="py-[12px] overflow-hidden flex flex-col bg-white rounded-[3px] shadow-lg"
            key={product.id}
          >
            {/* Image Section */}
            <div className="w-full lg:h-[360px] md:h-[300px] xs:h-[220px]">
              {" "}
              {/* Increased height */}
              <img
                src={product.image}
                alt="Not Found"
                className="h-64 w-full object-fill sm:h-80 lg:h-96"
              />
            </div>

            {/* Product Details */}
            <div className="px-[20px] py-[10px] flex-grow flex flex-col items-center">
              {/* Product Name */}
              <h4 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {product.name}
              </h4>

              {/* Product Price */}
              <div className="text-orange-500 text-[22px] mt-2 max-w-sm">
                ₹{product.price}.00
              </div>
            </div>

            {/* Add to Cart Button */}
            <div
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", id: product.id, products })
              }
              className="w-[80%] mx-auto rounded-sm bg-[#ff1a1a] text-center lg:py-4 xs:py-2 cursor-pointer"
            >
              <button className="bg-transparent border-none text-white uppercase outline-none cursor-pointer text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
