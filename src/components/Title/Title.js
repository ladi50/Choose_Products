import React from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

const Title = () => {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.heading}>
      Buy Products
    </Typography>
  );
};

export default Title;
