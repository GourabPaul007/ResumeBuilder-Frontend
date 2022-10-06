import "./RightForm.css";

import React, { Dispatch } from "react";

import { Backdrop, Button, CircularProgress, Grid } from "@mui/material";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { Educations } from "../../../interfaces/Educations";
import { FormStyles } from "../../../interfaces/FormStyles";
import { GridItem } from "../../../interfaces/GridItem";
import { Others } from "../../../interfaces/Others";
import { Projects } from "../../../interfaces/Projects";
import { Skills } from "../../../interfaces/Skills";
import { Works } from "../../../interfaces/Works";
import { AboutWithContactForm } from "./FormItems/AboutWithContactForm";
import { EducationForm } from "./FormItems/EducationsForm";
import { Miscellaneous } from "./FormItems/MiscellaneousForm";
import { OthersForm } from "./FormItems/OthersForm";
import { ProjectsForm } from "./FormItems/ProjectsForm";
import { SkillsForm } from "./FormItems/SkillsForm";
import { WorksForm } from "./FormItems/WorksForm";
import { ContactBlock } from "../../../interfaces/Contact";
import { About } from "../../../interfaces/About";
import { AboutForm } from "./FormItems/AboutForm";
import { ContactForm } from "./FormItems/ContactForm";
import { Ratings } from "../../../interfaces/Ratings";
import { RatingsForm } from "./FormItems/RatingsForm";

import { useNavigate } from "react-router-dom";

interface RightFormProps {
  makeItemsArray: (layouts: GridItem[]) => void;
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
  contact3: ContactBlock;
  setContact3: Dispatch<React.SetStateAction<ContactBlock>>;
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
  works2: Works;
  setWorks2: Dispatch<React.SetStateAction<Works>>;
  projects1: Projects;
  setProjects1: Dispatch<React.SetStateAction<Projects>>;
  projects2: Projects;
  setProjects2: Dispatch<React.SetStateAction<Projects>>;
  ratings1: Ratings;
  setRatings1: Dispatch<React.SetStateAction<Ratings>>;
  ratings2: Ratings;
  setRatings2: Dispatch<React.SetStateAction<Ratings>>;
  others1: Others;
  setOthers1: Dispatch<React.SetStateAction<Others>>;
  formStyles: FormStyles;
  setFormStyles: Dispatch<React.SetStateAction<FormStyles>>;
  forms: string[];
  layout: GridItem[];
}

export const RightForm: React.FC<RightFormProps> = (props) => {
  const navigate = useNavigate();

  // Backdrop/Loading when clicking "GET RESUME"
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    setLoading(false);
  };

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
      case "contact3":
        return <ContactForm contact={props.contact3} setContact={props.setContact3} formTitle={"Contact #3"} />;
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
      case "works2":
        return <WorksForm works={props.works2} setWorks={props.setWorks2} formTitle={"Work #2"} />;
      case "projects1":
        return <ProjectsForm projects={props.projects1} setProjects={props.setProjects1} formTitle={"Projects #1"} />;
      case "projects2":
        return <ProjectsForm projects={props.projects2} setProjects={props.setProjects2} formTitle={"Projects #2"} />;
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
          <div>
            <div style={{ height: 10 }}>&nbsp;</div>
            {props.forms.map((eachForm) => {
              return (
                <div key={eachForm} className="formWrapper">
                  {chooseFormToShow(eachForm)}
                </div>
              );
            })}
            <Grid item xs={12} className="formWrapper">
              <Miscellaneous formStyles={props.formStyles} setFormStyles={props.setFormStyles} />
            </Grid>
          </div>

          {/* <Button
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
          </Button> */}
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            style={{ marginBottom: 36 }}
            onClick={async (e: React.SyntheticEvent) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                try {
                  props.makeItemsArray(props.layout);
                  navigate("/download");
                } catch (e) {
                  console.error("Error adding document: ", e);
                }
              }, Math.floor(Math.random() * (2000 - 1500)) + 1500);
            }}
          >
            Get&nbsp;&nbsp;Resume
          </Button>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#123", zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
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
