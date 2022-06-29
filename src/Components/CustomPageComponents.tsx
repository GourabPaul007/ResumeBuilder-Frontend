import React from "react";
import { makeStyles } from "@mui/styles";
import { GridItem } from "../interfaces/GridItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

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
    padding: "5px 8px",
    height: 24,
    backgroundColor: "#eee",
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
  );
};

export const chooseLinkIcon = (link: string) => {
  if (link.toLowerCase().includes("linkedin")) return <LinkedInIcon style={{ fontSize: 16, marginRight: 8 }} />;
  if (link.toLowerCase().includes("github")) return <GitHubIcon style={{ fontSize: 16, marginRight: 8 }} />;
  if (link.toLowerCase().includes("mail")) return <EmailRoundedIcon style={{ fontSize: 16, marginRight: 8 }} />;
  if (link.toLowerCase().includes("home")) return <HomeRoundedIcon style={{ fontSize: 16, marginRight: 8 }} />;
  if (link.toLowerCase().includes("location"))
    return <LocationOnRoundedIcon style={{ fontSize: 16, marginRight: 8 }} />;
};
