import React, { useContext, useEffect, useState } from "react";
import { Box, MenuItem, TextField } from "@material-ui/core";

import { AppContext } from "../../context/context";

import { useStyles } from "./styles";

const Filter = () => {
  const [data, setData] = useState({
    name: "",
    category: ""
  });

  const classes = useStyles();

  const { filterProducts, products } = useContext(AppContext);

  useEffect(() => {
    filterProducts(data);
  }, [data, filterProducts]);

  const changeData = (e) => {
    const { value, name } = e.target;

    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box className={classes.filter}>
      {products?.length > 0 && (
        <>
          <TextField
            className={classes.field}
            select
            name="category"
            label="Categories"
            value={data.category}
            onChange={changeData}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="fruits">Fruits</MenuItem>
            <MenuItem value="tech">Tech</MenuItem>
            <MenuItem value="clothes">Clothes</MenuItem>
          </TextField>

          <TextField
            className={classes.field}
            variant="outlined"
            label="Product Name"
            type="text"
            name="name"
            placeholder="Search Products..."
            value={data.name}
            onChange={changeData}
          />
        </>
      )}
    </Box>
  );
};

export default Filter;
