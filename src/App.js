import React from "react";

import Shop from "./pages/Shop/Shop";
import { AppContext } from "./context/context";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

import "./App.css";

const App = () => {
  const {
    products,
    getProducts,
    filterProducts,
    filteredProducts
  } = useProducts();

  const { addToCart, cart, removeFromCart, cartProducts } = useCart();

  const values = {
    products,
    getProducts,
    filterProducts,
    filteredProducts,
    addToCart,
    cart,
    removeFromCart,
    cartProducts
  };

  return (
    <AppContext.Provider value={values}>
      <Shop />
    </AppContext.Provider>
  );
};

export default App;
