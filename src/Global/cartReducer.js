export const CartReducer = (state, action) => {
  let { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((cart) => cart.id === action.id);
      if (check) {
        return {
          ...state,
          message: "This product is already in the cart!",
        };
      } else {
        product = action.products.find((product) => product.id === action.id);
        product["qty"] = 1;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: totalPrice + product.price,
          qty: qty + 1,
          message: "",
        };
      }

    case "DELETE_PRODUCT":
      const filtered = shoppingCart.filter((cart) => cart.id !== action.id);
      product = shoppingCart.find((cart) => cart.id === action.id);
      return {
        shoppingCart: [...filtered],
        totalPrice: totalPrice - product.price * product.qty,
        qty: qty - product.qty,
        message: "",
      };

    case "INC":
      index = shoppingCart.findIndex((product) => product.id === action.id);
      if (index === -1) return state;

      const incrementedProduct = {
        ...shoppingCart[index],
        qty: shoppingCart[index].qty + 1,
      };

      return {
        shoppingCart: [
          ...shoppingCart.slice(0, index),
          incrementedProduct,
          ...shoppingCart.slice(index + 1),
        ],
        totalPrice: totalPrice + incrementedProduct.price,
        qty: qty + 1,
        message: "",
      };

    case "DEC":
      index = shoppingCart.findIndex((product) => product.id === action.id);
      if (index === -1) return state;

      const decrementedProduct = shoppingCart[index];
      if (decrementedProduct.qty > 1) {
        const updatedProduct = {
          ...decrementedProduct,
          qty: decrementedProduct.qty - 1,
        };

        return {
          shoppingCart: [
            ...shoppingCart.slice(0, index),
            updatedProduct,
            ...shoppingCart.slice(index + 1),
          ],
          totalPrice: totalPrice - decrementedProduct.price,
          qty: qty - 1,
          message: "",
        };
      } else {
        return state;
      }

    case "EMPTY":
      localStorage.removeItem("shoppingCart");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("qty");
      return { shoppingCart: [], totalPrice: 0, qty: 0, message: "" };

    default:
      return state;
  }
};
