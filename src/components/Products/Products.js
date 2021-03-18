import React, { useContext, useEffect } from "react";
import { GridList } from "@material-ui/core";

import Product from "./Product/Product";
import Spinner from "../../components/Spinner/Spinner";
import { AppContext } from "../../context/context";
import { useStyles } from "./styles";

const Products = () => {
  const { getProducts, filteredProducts, products } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {products?.length === 0 && <Spinner />}

        {filteredProducts?.length > 0 &&
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}

        {filteredProducts?.length === 0 && (
          <li className="products-empty">No Products Found</li>
        )}
      </GridList>
    </div>
  );
};

export default Products;
