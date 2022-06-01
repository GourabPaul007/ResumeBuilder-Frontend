import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { About1, About2 } from "./icons/about";

const useStyles = makeStyles((theme) => ({
  eachIcon: {
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 20,
    boxShadow: "0 10px 15px -3px rgba(36,69,101,0.19),0 4px 6px -2px #d0dce8;",
    borderRadius: 5,
    "&:hover": {
      transform: "scale(1.1)",
      transitionDuration: "0.2s",
      cursor: "pointer",
    },
  },
  avatar: {
    margin: 5,
    backgroundColor: orange[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 5,
  },
  getReusmeButton: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "#00ccc9",
    padding: 12,
  },
}));

interface LeftMenuProps {
  addBlock: (arg0: number, arg1: number) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ addBlock }) => {
  const styles = useStyles();
  return (
    <>
      <div style={{ padding: 10, backgroundColor: "#ebf4ff", boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.05)" }}>
        <div className={styles.eachIcon} onClick={() => addBlock(6, 4)}>
          <About1 />
        </div>
        <div className={styles.eachIcon} onClick={() => addBlock(2, 2)}>
          <About2 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
