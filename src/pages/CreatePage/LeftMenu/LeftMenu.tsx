import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { AboutAndContactIcon1, AboutAndContactIcon2 } from "./LeftMenuIcons/AboutAndContactIcons";
import { EducationIcon1, EducationIcon2 } from "./LeftMenuIcons/EducationsIcons";
import { ProjectsIcon1 } from "./LeftMenuIcons/ProjectIcons";
import { OthersIcon1 } from "./LeftMenuIcons/OthersIcons";
import { SkillsIcon1, SkillsIcon2 } from "./LeftMenuIcons/SkillsIcons";
import { WorksIcon1, WorksIcon2 } from "./LeftMenuIcons/WorksIcons";
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
                name: "Gourab Paul",
                profession: "Software Engineer",
                address: ["Saktigarh, Railgate Rd.", "Bongaon WB 743235"],
                cityZip: "Bangaon WB 743235",
                phno: "+91 9064040525",
                emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
                about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
                style: {
                  bgColor: "#123456",
                  textColor: "#ffffff",
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
                name: "Gourab Paul 2",
                profession: "Software Engineer",
                address: ["Saktigarh, Railgate Rd.", "Bongaon WB 743235"],
                cityZip: "Bangaon WB 743235",
                phno: "+91 9064040525",
                emails: ["gourabpaul900@gmail.com", "Github.com/GourabPaul007(https://github.com/GourabPaul007)"],
                about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae expedita architecto, doloribus recusandae iste harum fugit, maxime ipsa nemo magnam provident amet voluptate eveniet unde illo! Dolores, alias porro.`,
                style: {
                  bgColor: "#123456",
                  textColor: "#ffffff",
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
                name: "Bruh Doe",
                profession: "Bruhware Engineer",
                about:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dolorem libero reprehenderit maxime maiores officiis? Beatae fuga, quia dolorum sequi accusamus omnis ab corrupti, atque architecto expedita ipsa inventore.",
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
        {/* Contact */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Contact</div>
        <div
          className={inItemsArray("contact1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "contact1",
              Infinity,
              Infinity,
              4,
              8,
              {
                title: "",
                flipped: true,
                data: {
                  address: ["123 BV Rd, California"],
                  emails: ["abc@gmail.com", "Github.com/JohnDoe"],
                  phno: "123 456 7890",
                },
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <ContactIcon1 />
        </div>
        <div
          className={inItemsArray("contact2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "contact2",
              Infinity,
              Infinity,
              4,
              8,
              {
                title: "",
                flipped: false,
                data: {
                  address: ["123 BV Rd, California"],
                  emails: ["abc@gmail.com", "Github.com/JohnDoe"],
                  phno: "123 456 7890",
                },
                style: {
                  bgColor: "#ffffff",
                  textColor: "#000000",
                },
              },
              true
            )
          }
        >
          <ContactIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Educations */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Education</div>
        <div
          className={inItemsArray("educations1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "educations1",
              Infinity,
              Infinity,
              7,
              11,
              {
                title: "Educations1",
                data: [
                  {
                    id: "education001",
                    courseName: "Bachelor of Science in Computer Science",
                    courseDuration: "2019 - 2022",
                    organizationName: "Stanford University",
                    courseResults: "Cumulative CGPA 9.00",
                  },
                  {
                    id: "education002",
                    courseName: "Higher Secondary Science Stream",
                    courseDuration: "2017 - 2019",
                    organizationName: "Palo Alto High School",
                    courseResults: "Result Percentage 72%",
                  },
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
          <EducationIcon1 />
        </div>
        <div
          className={inItemsArray("educations2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "educations2",
              Infinity,
              Infinity,
              12,
              9,
              {
                title: "Educations2",
                data: [
                  {
                    id: "education001",
                    courseName: "Bachelor of Science in Computer Science",
                    courseDuration: "2019 - 2022",
                    organizationName: "Stanford University",
                    courseResults: "Cumulative CGPA 9.00",
                  },
                  {
                    id: "education002",
                    courseName: "Higher Secondary Science Stream",
                    courseDuration: "2017 - 2019",
                    organizationName: "Palo Alto High School",
                    courseResults: "Result Percentage 72%",
                  },
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
          onClick={() =>
            props.addBlock(
              "projects1",
              Infinity,
              Infinity,
              7,
              16,
              {
                title: "Projects UseEffect",
                data: [
                  {
                    id: "projectWed Jan 12 2022 13:38:12 GMT+0530 (India Standard Time)",
                    projectName: "Resume Builder",
                    projectDetails: [
                      "Built a Full-Stack Application to generate pdf files according to Dynamic User Input. Github: FrontEnd(https://github.com/GourabPaul007/ResumeBuilder-Frontend), Backend(https://github.com/GourabPaul007/ResumeBuilder-Backend).",
                      "Used Technologies: ReactJS, TS, Material UI, React-Redux, NodeJS, ExpressJS, EJS, TypeScript.",
                    ],
                  },
                  {
                    id: "projectWed Jan 12 2022 13:36:24 GMT+0530 (India Standard Time)",
                    projectName: "WhatsNote",
                    projectDetails: [
                      "A WhatsApp like look and feel note taking app built with clean architechture which helps people take detailed notes. Github: Codebase(https://github.com/GourabPaul007/Notebook).",
                      "Used Technologies: Flutter, Riverpod.",
                    ],
                  },
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
          <ProjectsIcon1 />
        </div>
        {/* ======================================================================================================= */}
        {/* Ratings */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Ratings</div>
        <div
          className={inItemsArray("ratings1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "ratings1",
              Infinity,
              Infinity,
              5,
              10,
              {
                title: "Language1",
                ratingType: "star",
                icon: "star",
                flipped: false,
                data: [
                  { id: `rating${Date.now()}`, ratingSubject: "English", rateInPercentage: 75 },
                  { id: `rating${Date.now()}`, ratingSubject: "Hindi", rateInPercentage: 75 },
                  { id: `rating${Date.now()}`, ratingSubject: "Bengali", rateInPercentage: 100 },
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
          <RatingsIcon1 />
        </div>
        <div
          className={inItemsArray("ratings2") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "ratings2",
              Infinity,
              Infinity,
              4,
              11,
              {
                title: "Ratings2",
                ratingType: "star",
                icon: "star",
                flipped: false,
                data: [
                  { id: `rating${Date.now()}`, ratingSubject: "English", rateInPercentage: 75 },
                  { id: `rating${Date.now()}`, ratingSubject: "Hindi", rateInPercentage: 75 },
                  { id: `rating${Date.now()}`, ratingSubject: "Bengali", rateInPercentage: 100 },
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
          <RatingsIcon2 />
        </div>
        {/* ======================================================================================================= */}
        {/* Others */}
        {/* ======================================================================================================= */}
        <div className={styles.categoryTitle}>Others</div>
        <div
          className={inItemsArray("others1") ? styles.eachSelectedIcon : styles.eachIcon}
          onClick={() =>
            props.addBlock(
              "others1",
              Infinity,
              Infinity,
              6,
              10,
              {
                title: "Others UseEffect",
                bullet: 9679,
                data: [
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Adipisicing Nulla repellat dolorum earum.",
                  "officiis distinctio ipsa officia soluta.",
                  "accusantium exercit ationem.",
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
          <OthersIcon1 />
        </div>
      </div>
    </>
  );
};

// const AboutBlocks

export default LeftMenu;
