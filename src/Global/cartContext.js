import React, { createContext, useReducer, useEffect } from "react";
import { CartReducer } from "./cartReducer";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("cartState")) || {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  };

  const [cart, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
