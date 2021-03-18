import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    padding: "12px",
    margin: "20px auto 40px",
    display: "block",
    fontSize: "1.3rem",
    border: "2px solid black",
    cursor: "pointer",
    borderRadius: "40px",
    width: "250px",
    transition: "all 0.2s ease-out",
    outlineWidth: 0,
    "&:hover": {
      border: "2px solid white",
      backgroundColor: "black",
      color: "white"
    }
  }
});
