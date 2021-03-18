import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "95%",
    margin: "0 auto"
  },
  gridList: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    "&::-webkit-scrollbar": {
      display: "none"
    },
  }
}));
