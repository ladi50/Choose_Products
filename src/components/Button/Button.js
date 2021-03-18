import React, { useContext } from "react";
import { Button as Btn } from "@material-ui/core";

import { AppContext } from "../../context/context";

import { useStyles } from "./styles";

const Button = () => {
  const { cartProducts, filteredProducts, cart } = useContext(AppContext);
  const classes = useStyles();

  const logCart = () => {
    cartProducts(filteredProducts);
  };

  return (
    <Btn
      className={classes.button}
      onClick={logCart}
      disabled={cart?.length === 0}
    >
      Log Cart
    </Btn>
  );
};

export default Button;
