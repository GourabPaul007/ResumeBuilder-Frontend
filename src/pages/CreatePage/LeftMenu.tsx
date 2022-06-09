import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutIcon1, AboutIcon2 } from "./LeftMenuIcons/aboutIcons";
import { EducationIcon1 } from "./LeftMenuIcons/educationIcons";
import { OthersIcon1 } from "./LeftMenuIcons/othersIcons";
import { SkillsIcon1 } from "./LeftMenuIcons/skillsIcons";
import { WorksIcon1 } from "./LeftMenuIcons/worksIcons";

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
  addBlock: (width: number, height: number, name: string, isResizable?: boolean) => void;
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
        <div className={styles.eachIcon} onClick={() => props.addBlock(10, 7, "about1")}>
          <AboutIcon1 />
        </div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(10, 7, "about2")}>
          <AboutIcon2 />
        </div>
        {/* Works */}
        <div style={{ marginLeft: 12, color: "#777" }}>Work History</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(6, 6, "works1", true)}>
          <WorksIcon1 />
        </div>
        {/* Skills */}
        <div style={{ marginLeft: 12, color: "#777" }}>Skills</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 7, "skills1", true)}>
          <SkillsIcon1 />
        </div>
        {/* Educations */}
        <div style={{ marginLeft: 12, color: "#777" }}>Education</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 7, "educations1", true)}>
          <EducationIcon1 />
        </div>
        {/* Others */}
        <div style={{ marginLeft: 12, color: "#777" }}>Others</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(4, 6, "others1", true)}>
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
