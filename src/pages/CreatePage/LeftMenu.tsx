import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutIcon1, AboutIcon2 } from "./LeftMenuIcons/AboutIcons";
import { EducationIcon1 } from "./LeftMenuIcons/EducationsIcons";
import { ProjectsIcon1 } from "./LeftMenuIcons/ProjectIcons";
import { OthersIcon1 } from "./LeftMenuIcons/OthersIcons";
import { SkillsIcon1, SkillsIcon2 } from "./LeftMenuIcons/SkillsIcons";
import { WorksIcon1 } from "./LeftMenuIcons/WorksIcons";

const useStyles = makeStyles((theme) => ({
  eachIcon: {
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 20,
    boxShadow: "0 5px 5px -3px rgba(36,69,101,0.19),0 4px 6px -2px #d0dce8;",
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
      <div style={{ paddingLeft: 3, paddingRight: 3 }}>
        {/* About + Contact */}
        <div style={{ marginLeft: 12, color: "#777" }}>About + Contact</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(12, 7, "about1", true)}>
          <AboutIcon1 />
        </div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(12, 7, "about2", true)}>
          <AboutIcon2 />
        </div>
        {/* Works */}
        {/* Educations */}
        <div style={{ marginLeft: 12, color: "#777" }}>Education</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(5, 8, "educations1", true)}>
          <EducationIcon1 />
        </div>
        {/* Skills */}
        <div style={{ marginLeft: 12, color: "#777" }}>Skills</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(5, 7, "skills1", true)}>
          <SkillsIcon1 />
        </div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(5, 7, "skills2", true)}>
          <SkillsIcon2 />
        </div>
        {/* Works */}
        <div style={{ marginLeft: 12, color: "#777" }}>Work History</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(7, 7, "works1", true)}>
          <WorksIcon1 />
        </div>
        {/* Projects */}
        <div style={{ marginLeft: 12, color: "#777" }}>Projects</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(7, 17, "projects1", true)}>
          <ProjectsIcon1 />
        </div>
        {/* Others */}
        <div style={{ marginLeft: 12, color: "#777" }}>Others</div>
        <div className={styles.eachIcon} onClick={() => props.addBlock(5, 7, "others1", true)}>
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
