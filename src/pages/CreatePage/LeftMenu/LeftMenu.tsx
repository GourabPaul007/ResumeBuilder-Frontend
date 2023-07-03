import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutAndContactIcon1, AboutAndContactIcon2 } from "./LeftMenuIcons/AboutAndContactIcons";
import { EducationIcon1, EducationIcon2 } from "./LeftMenuIcons/EducationsIcons";
import { ProjectsIcon1, ProjectsIcon2 } from "./LeftMenuIcons/ProjectIcons";
import { OthersIcon1 } from "./LeftMenuIcons/OthersIcons";
import { SkillsIcon1, SkillsIcon2 } from "./LeftMenuIcons/SkillsIcons";
import { WorksIcon1, WorksIcon2 } from "./LeftMenuIcons/WorksIcons";
import { GridItem } from "../../../interfaces/GridItem";
import { AboutIcon1 } from "./LeftMenuIcons/AboutIcons";
import { ContactIcon1, ContactIcon2, ContactIcon3 } from "./LeftMenuIcons/ContactIcons";
import { RatingsIcon1, RatingsIcon2 } from "./LeftMenuIcons/RatingsIcons";
import { SpacersIcon1, SpacersIcon2, SpacersIcon3 } from "./LeftMenuIcons/SpacersIcons";
import { NameIcon1 } from "./LeftMenuIcons/NameIcons";
import { CertificateIcon1 } from "./LeftMenuIcons/CertificatesIcons";

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
  addBlock: (
    name: string,
    x: number,
    y: number,
    width: number,
    height: number,
    data: any,
    isResizable: boolean
  ) => void;
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
          onClick={() =>
            props.addBlock(
              "aboutwithcontact1",
              Infinity,
              Infinity,
              12,
              10,
              {
                name: "",
                profession: "",
                address: [],
                cityZip: "",
                phno: "",
                emails: [],
                about: ``,
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <AboutAndContactIcon1 />
        </div>
        <div
          className={inItemsArray("aboutwithcontact2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "aboutwithcontact2",
              Infinity,
              Infinity,
              12,
              10,
              {
                name: "",
                profession: "",
                address: [],
                cityZip: "",
                phno: "",
                emails: [],
                about: ``,
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <AboutAndContactIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* About */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>About</div>
        <div
          className={inItemsArray("about1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "about1",
              Infinity,
              Infinity,
              8,
              8,
              {
                name: "",
                profession: "",
                about: "",
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <AboutIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Name */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Name</div>
        <div
          className={inItemsArray("name1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("name1", Infinity, Infinity, 8, 4, {}, true)}
        >
          <NameIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Contact */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Contact</div>
        <div
          className={inItemsArray("contact1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("contact1", Infinity, Infinity, 4, 8, {}, true)}
        >
          <ContactIcon1 />
        </div>
        <div
          className={inItemsArray("contact2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("contact2", Infinity, Infinity, 4, 8, {}, true)}
        >
          <ContactIcon2 />
        </div>
        <div
          className={inItemsArray("contact3") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("contact3", Infinity, Infinity, 4, 8, {}, true)}
        >
          <ContactIcon3 />
        </div>
        {/* ======================================================================================================= */}
        {/* Educations */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Education</div>
        <div
          className={inItemsArray("educations1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("educations1", Infinity, Infinity, 7, 11, {}, true)}
        >
          <EducationIcon1 />
        </div>
        <div
          className={inItemsArray("educations2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("educations2", Infinity, Infinity, 12, 9, {}, true)}
        >
          <EducationIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Skills */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Skills</div>
        <div
          className={inItemsArray("skills1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "skills1",
              Infinity,
              Infinity,
              5,
              11,
              {
                color: "#ff5656",
                title: "Skills UE",
                chipRadius: 16,
                chipSize: 5,
                filled: true,
                flipped: false,
                data: [
                  "Lorem",
                  "ipsum",
                  "dolor sit",
                  "amet",
                  "consect",
                  "etur",
                  "Adipis",
                  "icing",
                  "Nulla",
                  "acusant",
                  "officiis",
                  "distinct",
                ],
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <SkillsIcon1 />
        </div>
        <div
          className={inItemsArray("skills2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "skills2",
              Infinity,
              Infinity,
              5,
              11,
              {
                color: "#ff5656",
                title: "Skills UE",
                chipRadius: 16,
                chipSize: 5,
                filled: true,
                flipped: false,
                data: [
                  "Lorem",
                  "ipsum",
                  "dolor sit",
                  "amet",
                  "consect",
                  "etur",
                  "Adipis",
                  "icing",
                  "Nulla",
                  "acusant",
                  "officiis",
                  "distinct",
                ],
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <SkillsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Works */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Work History</div>
        <div
          className={inItemsArray("works1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("works1", Infinity, Infinity, 8, 12, {}, true)}
        >
          <WorksIcon1 />
        </div>
        <div
          className={inItemsArray("works2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("works2", Infinity, Infinity, 7, 15, {}, true)}
        >
          <WorksIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Projects */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Projects</div>
        <div
          className={inItemsArray("projects1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("projects1", Infinity, Infinity, 8, 16, {}, true)}
        >
          <ProjectsIcon1 />
        </div>
        <div
          className={inItemsArray("projects2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("projects2", Infinity, Infinity, 7, 16, {}, true)}
        >
          <ProjectsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Ratings */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Ratings</div>
        <div
          className={inItemsArray("ratings1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("ratings1", Infinity, Infinity, 5, 10, {}, true)}
        >
          <RatingsIcon1 />
        </div>
        <div
          className={inItemsArray("ratings2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("ratings2", Infinity, Infinity, 4, 11, {}, true)}
        >
          <RatingsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Certificates */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Certificates</div>
        <div
          className={inItemsArray("certifications1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("certifications1", Infinity, Infinity, 6, 10, {}, true)}
        >
          <CertificateIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Others */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Others</div>
        <div
          className={inItemsArray("others1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("others1", Infinity, Infinity, 6, 10, {}, true)}
        >
          <OthersIcon1 />
        </div>

        {/* ======================================================================================================= */}
        {/* Images */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Images</div>
        <div
          className={inItemsArray("image1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("image1", Infinity, Infinity, 4, 10, {}, true)}
        >
          <OthersIcon1 />
        </div>

        {/* ======================================================================================================= */}
        {/* Spacers */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Spacers</div>
        <div
          className={inItemsArray("spacer1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("spacer1", Infinity, Infinity, 3, 5, {}, true)}
        >
          <SpacersIcon1 />
        </div>
        <div
          className={inItemsArray("spacer2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("spacer2", Infinity, Infinity, 6, 5, {}, true)}
        >
          <SpacersIcon2 />
        </div>
        <div
          className={inItemsArray("spacer3") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() => props.addBlock("spacer3", Infinity, Infinity, 9, 5, {}, true)}
        >
          <SpacersIcon3 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
