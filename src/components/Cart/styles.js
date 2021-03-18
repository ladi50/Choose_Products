import { createMuiTheme, makeStyles } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export const useStyles = makeStyles({
  cart: {
    margin: "30px auto 50px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    maxWidth: 350,
    minWidth: 300
  },
  cart__list: {
    padding: 0
  },
  cartTitle: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "600",
    margin: "10px 0 20px"
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.action.selected
    }
  },
  listItem__text: {
    color: "white",
    textTransform: "capitalize",
    width: "100%",
    "&:hover": {
      textDecoration: "line-through"
    }
  },
  listEmpty: {
    color: "white"
  }
});
