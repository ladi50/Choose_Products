import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  product: {
    margin: "15px 5px",
    width: 200
  },
  image: {
    width: "100%",
    objectFit: "contain"
  },
  productBorder: {
    borderBottom: "none"
  },
  title: {
    textTransform: "capitalize"
  },
  icon: {
    color: "white"
  }
}));
