import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutIcon1, AboutIcon2 } from "./icons/aboutIcons";
import { EducationIcon1 } from "./icons/educationIcons";
import { OthersIcon1 } from "./icons/othersIcons";
import { SkillsIcon1 } from "./icons/skillsIcons";

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
  addBlock: (width: number, height: number, name: string) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = (props) => {
  const styles = useStyles();
  return (
    <>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ebf4ff",
          boxShadow: "4px 0px 4px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* About + Contact */}
        <div style={{ marginLeft: 12, color: "#777" }}>About + Contact</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(10, 6, "about1")}>
          <AboutIcon1 />
        </div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(2, 2, "about2")}>
          <AboutIcon2 />
        </div>
        {/* Skills */}
        <div style={{ marginLeft: 12, color: "#777" }}>Skills</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 20, "skills1")}>
          <SkillsIcon1 />
        </div>
        {/* Educations */}
        <div style={{ marginLeft: 12, color: "#777" }}>Education</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 20, "educations1")}>
          <EducationIcon1 />
        </div>
        {/* Others */}
        <div style={{ marginLeft: 12, color: "#777" }}>Others</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 20, "others1")}>
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
