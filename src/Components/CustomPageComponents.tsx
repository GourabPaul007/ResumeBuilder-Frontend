import React from "react";
import { makeStyles } from "@mui/styles";
import { GridItem } from "../interfaces/GridItem";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 12,
    right: 12,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wrapperFlipped: {
    position: "absolute",
    top: 12,
    left: 12,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    padding: "5px 8px",
    height: 24,
    backgroundColor: "#eee",
    fontSize: 13,
    fontFamily: "poppins",
    color: "#333",
    borderRadius: 3,
    marginRight: 8,
    zIndex: 1,
  },
  button: {
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
  blockTitle: string;
  removeItem: (i: GridItem) => void;
  item: GridItem;
  flipped?: boolean;
}

export const RemoveBlockButton: React.FC<RemoveBlockButtonProps> = (props) => {
  const classes = useStyles();
  return props.flipped ? (
    <div className={classes.wrapperFlipped}>
      <button className={classes.button} onClick={() => props.removeItem(props.item)}>
        X
      </button>
      &nbsp;&nbsp;
      <div className={classes.title}>{props.blockTitle}</div>
    </div>
  ) : (
    <div className={classes.wrapper}>
      <div className={classes.title}>{props.blockTitle}</div>
      <button className={classes.button} onClick={() => props.removeItem(props.item)}>
        X
      </button>
    </div>
  );
};
