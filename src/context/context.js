import { createContext } from "react";

export const AppContext = createContext({
  products: [],
  filteredProducts: [],
  cart: [],
  getProducts: () => {},
  filterProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  cartProducts: () => {}
});
