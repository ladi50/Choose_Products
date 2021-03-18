import React from "react";

import Title from "../../components/Title/Title";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import Button from "../../components/Button/Button";

const Shop = () => {
  return (
    <>
      <Title />
      <Filter />
      <Products />
      <Cart />
      <Button />
    </>
  );
};

export default Shop;
