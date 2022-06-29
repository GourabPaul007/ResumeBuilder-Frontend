import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutIcon1, AboutIcon2 } from "./LeftMenuIcons/AboutIcons";
import { EducationIcon1 } from "./LeftMenuIcons/EducationsIcons";
import { ProjectsIcon1 } from "./LeftMenuIcons/ProjectIcons";
import { OthersIcon1 } from "./LeftMenuIcons/OthersIcons";
import { SkillsIcon1, SkillsIcon2 } from "./LeftMenuIcons/SkillsIcons";
import { WorksIcon1 } from "./LeftMenuIcons/WorksIcons";
import { GridItem } from "../../interfaces/GridItem";

const useStyles = makeStyles((theme) => ({
  eachIcon: {
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 20,
    border: "1px solid #6b5be6",
    // border: "1px solid #00000021",
    // borderBottom: "2px solid #00000021",
    backfaceVisibility: "hidden",
    borderRadius: 5,
    "&:hover": {
      transform: "scale(1.1)",
      transitionDuration: "0.2s",
      cursor: "pointer",
    },
  },
  eachSelectedIcon: {
    backgroundColor: "#dedede",
    margin: 10,
    marginBottom: 20,
    border: "1px solid #6b5be6",
    // border: "1px solid #00000021",
    // borderBottom: "2px solid #00000021",
    borderRadius: 5,
    "&:hover": {
      cursor: "not-allowed",
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
  items: GridItem[];
}

const LeftMenu: React.FC<LeftMenuProps> = (props) => {
  const styles = useStyles();

  const inItemsArray = (itemName: string): boolean => {
    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].i == itemName) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <div style={{ paddingLeft: 3, paddingRight: 3 }}>
        {/* About + Contact */}
        <div style={{ marginLeft: 12, color: "#777" }}>About + Contact</div>
        <div
          className={inItemsArray("about1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(12, 7, "about1", true)}
        >
          <AboutIcon1 />
        </div>
        <div
          className={inItemsArray("about2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(12, 7, "about2", true)}
        >
          <AboutIcon2 />
        </div>
        {/* Works */}
        {/* Educations */}
        <div style={{ marginLeft: 12, color: "#777" }}>Education</div>
        <div
          className={inItemsArray("educations1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 8, "educations1", true)}
        >
          <EducationIcon1 />
        </div>
        {/* Skills */}
        <div style={{ marginLeft: 12, color: "#777" }}>Skills</div>
        <div
          className={inItemsArray("skills1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 8, "skills1", true)}
        >
          <SkillsIcon1 />
        </div>
        <div
          className={inItemsArray("skills2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 8, "skills2", true)}
        >
          <SkillsIcon2 />
        </div>
        {/* Works */}
        <div style={{ marginLeft: 12, color: "#777" }}>Work History</div>
        <div
          className={inItemsArray("works1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(7, 7, "works1", true)}
        >
          <WorksIcon1 />
        </div>
        {/* Projects */}
        <div style={{ marginLeft: 12, color: "#777" }}>Projects</div>
        <div
          className={inItemsArray("projects1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(7, 17, "projects1", true)}
        >
          <ProjectsIcon1 />
        </div>
        {/* Others */}
        <div style={{ marginLeft: 12, color: "#777" }}>Others</div>
        <div
          className={inItemsArray("others1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 7, "others1", true)}
        >
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
