import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { cartContext } from "../Global/cartContext";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Cart = (props) => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(cartContext);
  const navigate = useNavigate();

  const handleToken = async (token) => {
    const product = { name: "All Products", price: totalPrice };
    const response = await axios.post(
      "https://w7gqb.sse.codesandbox.io/checkout",
      {
        token,
        product,
      }
    );
    const { status } = response.data;
    if (status === "success") {
      dispatch({ type: "EMPTY" });
      props.history.push(`/`);
    } else {
    }
  };

  return (
    <div className="w-full mt-4 px-4 md:px-20 flex flex-wrap items-start">
      {/* Back Button */}
      <div className="w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#ff1a1a] text-white py-2 px-4 rounded mb-4"
        >
          <FaArrowAltCircleLeft />
        </button>
      </div>
      <div className="w-full md:w-[75%] border border-solid border-[#fafafa] rounded-[5px]">
        {shoppingCart.length
          ? shoppingCart.map((product) => (
              <div
                className="flex flex-wrap flex-row justify-center items-center gap-4 bg-[#fff] py-[15px] px-[20px] border-b"
                key={product.id}
              >
                <span className="inline-block w-[100px] h-[100px] relative mb-4 md:mb-0">
                  <img
                    src={product.image}
                    alt=""
                    className="w-[100%] h-[100%]"
                  />
                </span>
                <span className="w-[60%] md:w-[250px] px-[15px] text-center md:text-left text-lg font-semibold">
                  {product.name}
                </span>
                <span className="w-[120px] px-[15px] font-bold text-center md:text-left">
                  ₹{product.price}.00
                </span>
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] text-center border-[1.1px] boder-solid border-[orangered] text-[orangered] rounded-[50%] cursor-pointer"
                  onClick={() => dispatch({ type: "INC", id: product.id })}
                >
                  <FaPlus />
                </span>
                <span className="px-[15px] font-[16px] w-[70px] text-center">
                  {product.qty}
                </span>
                <span
                  className="flex items-center justify-center w-[40px] h-[40px] text-center border-[1.1px] border-solid border-[#e46262d9] text-[#e46262d9] rounded-[50%] cursor-pointer"
                  onClick={() => dispatch({ type: "DEC", id: product.id })}
                >
                  <FaMinus />
                </span>
                <span className="w-[150px] px-[15px] font-bold text-[#f57224] text-center">
                  ₹{product.qty * product.price}.00
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_PRODUCT", id: product.id })
                  }
                  className="px-[15px] text-[#f77575d9] bg-transparent font-[20px] cursor-pointer"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            ))
          : "Your Cart is currently empty!"}
      </div>

      {shoppingCart.length ? (
        <div className="w-full md:w-[25%] mt-4 md:mt-0 md:pl-[20px]">
          <div className="bg-[#fff] p-[13px]">
            <h3 className="font-[18px] border-b-[1px] border-solid border-[#999] pb-[7px]">
              Order Summary
            </h3>
            <div className="flex my-[15px] justify-between">
              <div>Total Items</div>
              <div className="font-bold text-[#f57224]">{qty}.00</div>
            </div>
            <div className="flex my-[15px] justify-between">
              <div>Total Price</div>
              <div className="font-bold text-[#f57224]">₹{totalPrice}.00</div>
            </div>
            <div className="my-[15px] border-t-[1px] border-solid border-[#999] pt-[15px]">
              <StripeCheckout
                stripeKey="pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name="all products in the cart"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
