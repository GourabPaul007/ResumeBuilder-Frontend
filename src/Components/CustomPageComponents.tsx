import React from "react";
import { makeStyles } from "@mui/styles";
import { GridItem } from "../interfaces/GridItem";
import { Chip, IconButton } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 12,
    right: 12,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    padding: "4px 8px",
    height: 24,
    backgroundColor: "#ddd",
    fontSize: 13,
    color: "#000",
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

  iconButton: {
    display: "inline-block",
    float: "right",
  },
}));

interface RemoveBlockButtonProps {
  blockTitle: string;
  removeItem: (i: GridItem) => void;
  item: GridItem;
}

export const RemoveBlockButton: React.FC<RemoveBlockButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} style={{}}>
      <div className={classes.title}>{props.blockTitle}</div>
      {/* <Chip size="small" label={props.blockTitle} /> */}
      <button className={classes.button} onClick={() => props.removeItem(props.item)}>
        X
      </button>
    </div>
    // <IconButton className={classes.iconButton} size="large" onClick={() => props.removeItem(props.item)}>
    //   <DeleteRounded color="error" />
    // </IconButton>
  );
};
