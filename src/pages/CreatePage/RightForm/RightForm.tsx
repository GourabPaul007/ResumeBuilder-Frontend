import { Button, Container, CssBaseline, Grid, Modal, TextField, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch } from "react";
import { useState, FC } from "react";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { Course, Educations } from "../../../interfaces/Educations";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Others } from "../../../interfaces/Others";
import { Project, Projects } from "../../../interfaces/Projects";
import { Skills } from "../../../interfaces/Skills";
import { Work, Works } from "../../../interfaces/Works";
import { AboutWithContactForm } from "./FormItems/AboutWithContactForm";
import { EducationForm } from "./FormItems/EducationsForm";
import { Miscellaneous } from "./FormItems/MiscellaneousForm";
import { OthersForm } from "./FormItems/OthersForm";
import { ProjectsForm } from "./FormItems/ProjectsForm";
import { SkillsForm } from "./FormItems/SkillsForm";
import { WorksForm } from "./FormItems/WorksForm";
import { Contact, ContactBlock } from "../../../interfaces/Contact";
import { About } from "../../../interfaces/About";
import { AboutForm } from "./FormItems/AboutForm";
import { ContactForm } from "./FormItems/ContactForm";
import { Ratings } from "../../../interfaces/Ratings";
import { RatingsForm } from "./FormItems/RatingsForm";

import { getFirestore, addDoc, collection } from "firebase/firestore";
import DownloadModal from "../DownloadModal";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formWrapper: {
    boxShadow: "0px 1px 2px #d5d5d7",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
}));

interface RightFormProps {
  makeItemsArray: () => void;
  items: GridItem[];
  aboutWithContact1: AboutWithContact;
  setAboutWithContact1: Dispatch<React.SetStateAction<AboutWithContact>>;
  aboutWithContact2: AboutWithContact;
  setAboutWithContact2: Dispatch<React.SetStateAction<AboutWithContact>>;
  about1: About;
  setAbout1: Dispatch<React.SetStateAction<About>>;
  contact1: ContactBlock;
  setContact1: Dispatch<React.SetStateAction<ContactBlock>>;
  contact2: ContactBlock;
  setContact2: Dispatch<React.SetStateAction<ContactBlock>>;
  educations1: Educations;
  setEducations1: Dispatch<React.SetStateAction<Educations>>;
  educations2: Educations;
  setEducations2: Dispatch<React.SetStateAction<Educations>>;
  skills1: Skills;
  setSkills1: Dispatch<React.SetStateAction<Skills>>;
  skills2: Skills;
  setSkills2: Dispatch<React.SetStateAction<Skills>>;
  works1: Works;
  setWorks1: Dispatch<React.SetStateAction<Works>>;
  projects1: Projects;
  setProjects1: Dispatch<React.SetStateAction<Projects>>;
  ratings1: Ratings;
  setRatings1: Dispatch<React.SetStateAction<Ratings>>;
  ratings2: Ratings;
  setRatings2: Dispatch<React.SetStateAction<Ratings>>;
  others1: Others;
  setOthers1: Dispatch<React.SetStateAction<Others>>;
  formStyles: FormStyles;
  setFormStyles: Dispatch<React.SetStateAction<FormStyles>>;
  forms: string[];
}

export const RightForm: FC<RightFormProps> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Return the specific form from passed parameter
  const chooseFormToShow = (form: string): React.ReactNode => {
    switch (form) {
      case "aboutwithcontact1":
        return (
          <AboutWithContactForm
            aboutWithContact={props.aboutWithContact1}
            setAboutWithContact={props.setAboutWithContact1}
            formTitle={"About & Contact #1"}
          />
        );
      case "aboutwithcontact2":
        return (
          <AboutWithContactForm
            aboutWithContact={props.aboutWithContact2}
            setAboutWithContact={props.setAboutWithContact2}
            formTitle={"About & Contact #2"}
          />
        );
      case "about1":
        return <AboutForm about={props.about1} setAbout={props.setAbout1} formTitle={"About #1"} />;
      case "contact1":
        return <ContactForm contact={props.contact1} setContact={props.setContact1} formTitle={"Contact #1"} />;
      case "contact2":
        return <ContactForm contact={props.contact2} setContact={props.setContact2} formTitle={"Contact #2"} />;
      case "skills1":
        return <SkillsForm skills={props.skills1} setSkills={props.setSkills1} formTitle={"Skills #1"} />;
      case "skills2":
        return <SkillsForm skills={props.skills2} setSkills={props.setSkills2} formTitle={"Skills #2"} />;
      case "educations1":
        return (
          <EducationForm
            educations={props.educations1}
            setEducations={props.setEducations1}
            formTitle={"Education #1"}
          />
        );
      case "educations2":
        return (
          <EducationForm
            educations={props.educations2}
            setEducations={props.setEducations2}
            formTitle={"Education #2"}
          />
        );
      case "works1":
        return <WorksForm works={props.works1} setWorks={props.setWorks1} formTitle={"Work #1"} />;
      case "projects1":
        return <ProjectsForm projects={props.projects1} setProjects={props.setProjects1} formTitle={"Projects #1"} />;
      case "ratings1":
        return <RatingsForm ratings={props.ratings1} setRatings={props.setRatings1} formTitle={"Ratings #1"} />;
      case "ratings2":
        return <RatingsForm ratings={props.ratings2} setRatings={props.setRatings2} formTitle={"Ratings #2"} />;
      case "others1":
        return <OthersForm others={props.others1} setOthers={props.setOthers1} formTitle={"Others #1"} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ paddingBottom: 36, minHeight: "100vh" }}>
        <div>
          <Grid container>
            <div style={{ height: 10 }}>&nbsp;</div>
            {props.forms.map((eachForm) => {
              return (
                <Grid item xs={12} key={eachForm} className={classes.formWrapper}>
                  {chooseFormToShow(eachForm)}
                </Grid>
              );
            })}
            <Grid item xs={12} className={classes.formWrapper}>
              <Miscellaneous formStyles={props.formStyles} setFormStyles={props.setFormStyles} />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            style={{ marginBottom: 36 }}
            onClick={async (e: React.SyntheticEvent) => {
              e.preventDefault();
              props.makeItemsArray();

              const db = getFirestore();
              try {
                const docRef = await addDoc(collection(db, "resumes"), {
                  resumeData: { blocks: props.makeItemsArray(), formStyles: props.formStyles },
                });
                console.log("Document written with ID: ", docRef.id);
                navigate("/download/" + docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              // setDownloadModalOpen(true);
              // navigate("/download/"+docRef.id);
            }}
          >
            Get&nbsp;&nbsp;Resume
          </Button>
        </div>
      </div>
    </>
  );
};

const textfieldDefaultProps: {
  variant: "outlined" | "filled" | "standard" | any;
  size: "small" | "medium" | undefined;
  margin: "none" | "normal" | "dense" | undefined;
  required: boolean;
  fullWidth: boolean;
} = {
  variant: "filled",
  size: "small",
  margin: "dense",
  required: true,
  fullWidth: true,
};

// about: About,
// setAbout: Dispatch<React.SetStateAction<About>>,
// skills: string[],
// setSkills: Dispatch<React.SetStateAction<string[]>>,
// educations: Course[],
// setEducations: Dispatch<React.SetStateAction<Course[]>>
