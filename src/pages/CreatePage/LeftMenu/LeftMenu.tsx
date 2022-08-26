import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutAndContactIcon1, AboutAndContactIcon2 } from "./LeftMenuIcons/AboutAndContactIcons";
import { EducationIcon1, EducationIcon2 } from "./LeftMenuIcons/EducationsIcons";
import { ProjectsIcon1 } from "./LeftMenuIcons/ProjectIcons";
import { OthersIcon1 } from "./LeftMenuIcons/OthersIcons";
import { SkillsIcon1, SkillsIcon2 } from "./LeftMenuIcons/SkillsIcons";
import { WorksIcon1 } from "./LeftMenuIcons/WorksIcons";
import { GridItem } from "../../../interfaces/GridItem";
import { AboutIcon1 } from "./LeftMenuIcons/AboutIcons";
import { ContactIcon1, ContactIcon2 } from "./LeftMenuIcons/ContactIcons";
import { RatingsIcon1, RatingsIcon2 } from "./LeftMenuIcons/RatingsIcons";

const useStyles = makeStyles((theme) => ({
  eachIcon: {
    backgroundColor: "#fff",
    margin: "5px 5px 20px 5px",
    // border: "1px solid #6b5be6",
    boxShadow: "0 10px 15px -3px rgba(36,69,101,.19),0 4px 6px -2px #d0dce8",
    backfaceVisibility: "hidden",
    borderRadius: 5,
    height: 70,
    // width: 125,
    "&:hover": {
      transform: "scale(1.1)",
      transitionDuration: "100ms",
      cursor: "pointer",
    },
  },
  eachSelectedIcon: {
    backgroundColor: "#dedede",
    margin: "5px 5px 20px 5px",
    // border: "1px solid #6b5be6",
    boxShadow: "0 10px 15px -3px rgba(36,69,101,.19),0 4px 6px -2px #d0dce8",
    borderRadius: 5,
    height: 70,
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
  categoryTitle: { marginLeft: 12, color: "#777", marginTop: 36 },
}));

interface LeftMenuProps {
  addBlock: (width: number, height: number, name: string, isResizable?: boolean) => void;
  items: GridItem[];
}

const LeftMenu: React.FC<LeftMenuProps> = (props) => {
  const styles = useStyles();

  // Check if already in Array then grey out the block
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
        {/* ======================================================================================================= */}
        {/* About + Contact */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle} style={{ marginTop: 0 }}>
          About + Contact
        </div>
        <div
          className={inItemsArray("aboutwithcontact1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(12, 10, "aboutwithcontact1", true)}
        >
          <AboutAndContactIcon1 />
        </div>
        <div
          className={inItemsArray("aboutwithcontact2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(12, 10, "aboutwithcontact2", true)}
        >
          <AboutAndContactIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* About */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>About</div>
        <div
          className={inItemsArray("about1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(8, 8, "about1", true)}
        >
          <AboutIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Contact */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Contact</div>
        <div
          className={inItemsArray("contact1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(4, 8, "contact1", true)}
        >
          <ContactIcon1 />
        </div>
        <div
          className={inItemsArray("contact2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(4, 8, "contact2", true)}
        >
          <ContactIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Educations */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Education</div>
        <div
          className={inItemsArray("educations1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(6, 10, "educations1", true)}
        >
          <EducationIcon1 />
        </div>
        <div
          className={inItemsArray("educations2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(12, 9, "educations2", true)}
        >
          <EducationIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Skills */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Skills</div>
        <div
          className={inItemsArray("skills1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 11, "skills1", true)}
        >
          <SkillsIcon1 />
        </div>
        <div
          className={inItemsArray("skills2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 11, "skills2", true)}
        >
          <SkillsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Works */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Work History</div>
        <div
          className={inItemsArray("works1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(7, 10, "works1", true)}
        >
          <WorksIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Projects */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Projects</div>
        <div
          className={inItemsArray("projects1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(7, 16, "projects1", true)}
        >
          <ProjectsIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Ratings */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Ratings</div>
        <div
          className={inItemsArray("ratings1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(5, 10, "ratings1", true)}
        >
          <RatingsIcon1 />
        </div>
        <div
          className={inItemsArray("ratings2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(4, 11, "ratings2", true)}
        >
          <RatingsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Others */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Others</div>
        <div
          className={inItemsArray("others1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock(6, 10, "others1", true)}
        >
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
