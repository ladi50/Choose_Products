import React, { useContext } from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

import { AppContext } from "../../context/context";

import { useStyles } from "./styles";

const Cart = () => {
  const { cart, removeFromCart, products } = useContext(AppContext);
  const classes = useStyles();

  const removeItem = (e) => {
    if (cart.includes(e.target.innerHTML)) {
      removeFromCart(e.target.innerHTML);
    }
  };

  return (
    <div className={classes.cart}>
      {products?.length > 0 && (
        <>
          <List
          className={classes.cart__list}
            component="ul"
            subheader={
              <ListSubheader className={classes.cartTitle}>
                Cart Items
              </ListSubheader>
            }
          >
            {cart?.length > 0 ? (
              cart.map((item) => (
                <ListItem
                  button
                  key={item}
                  onClick={removeItem}
                  className={classes.listItem}
                >
                  <ListItemText
                    primary={item}
                    className={classes.listItem__text}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem onClick={removeItem}>
                <ListItemText
                  primary="Your cart is empty"
                  className={classes.listEmpty}
                />
              </ListItem>
            )}
          </List>
        </>
      )}
    </div>
  );
};

export default Cart;
