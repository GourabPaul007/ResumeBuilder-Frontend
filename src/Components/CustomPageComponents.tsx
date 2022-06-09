import React from "react";
import { makeStyles } from "@mui/styles";
import { GridItem } from "../interfaces/GridItem";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "inline-block",
    float: "right",
    backgroundColor: "#ff5252",
    border: "none",
    borderRadius: 3,
    height: 24,
    width: 36,
    color: "white",
    "&:hover": { backgroundColor: "#ff1744", cursor: "pointer" },
  },
}));

interface RemoveBlockButtonProps {
  removeItem: (i: GridItem) => void;
  item: GridItem;
}

export const RemoveBlockButton: React.FC<RemoveBlockButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <button className={classes.button} onClick={() => props.removeItem(props.item)}>
      X
    </button>
  );
};
