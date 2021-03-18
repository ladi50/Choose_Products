import React, { useContext } from "react";
import {
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper
} from "@material-ui/core";

import { AppContext } from "../../../context/context";
import { Add } from "@material-ui/icons";

import { useStyles } from "./styles";

const Product = ({ product }) => {
  const { name, imageUrl } = product;
  const { addToCart, cart } = useContext(AppContext);
  const classes = useStyles();

  const addItem = () => {
    if (!cart.includes(name)) {
      addToCart(name);
    }
  };

  return (
    <GridListTile className={classes.product}>
      <Paper variant="outlined" className={classes.productBorder}>
        <img src={imageUrl} alt={name} className={classes.image} />

        <GridListTileBar
          className={classes.title}
          title={name}
          actionIcon={
            <IconButton onClick={addItem} className={classes.icon}>
              <Add />
            </IconButton>
          }
        />
      </Paper>
    </GridListTile>
  );
};

export default Product;
