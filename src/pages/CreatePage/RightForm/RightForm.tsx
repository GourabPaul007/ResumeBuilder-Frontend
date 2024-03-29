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
import { getDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { MADE_RESUME } from "../../../constants";
import { NameForm } from "./FormItems/NameForm";
import { Name } from "../../../interfaces/Name";
import { getResumeName, saveResume, saveResumeName } from "../../../services/ResumeService";
import { getCurrentUser } from "../../../services/userService";
import { User } from "firebase/auth";
import { Certifications } from "../../../interfaces/Certification";
import { CertificationsForm } from "./FormItems/CertificationsForm";
import { Photo } from "../../../interfaces/Photo";
import { PhotoForm } from "./FormItems/PhotoForm";

interface RightFormProps {
  makeItemsArray: (layouts: GridItem[]) => void;
  items: GridItem[];
  aboutWithContact1: AboutWithContact;
  setAboutWithContact1: Dispatch<React.SetStateAction<AboutWithContact>>;
  aboutWithContact2: AboutWithContact;
  setAboutWithContact2: Dispatch<React.SetStateAction<AboutWithContact>>;
  about1: About;
  setAbout1: Dispatch<React.SetStateAction<About>>;
  name1: Name;
  setName1: Dispatch<React.SetStateAction<Name>>;
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
  certifications1: Certifications;
  setCertifications1: Dispatch<React.SetStateAction<Certifications>>;
  others1: Others;
  setOthers1: Dispatch<React.SetStateAction<Others>>;
  photo1: Photo;
  setPhoto1: Dispatch<React.SetStateAction<Photo>>;
  formStyles: FormStyles;
  setFormStyles: Dispatch<React.SetStateAction<FormStyles>>;
  forms: string[];
  layout: GridItem[];
}

export const RightForm: React.FC<RightFormProps> = (props) => {
  const navigate = useNavigate();

  const analytics = getAnalytics();

  // Backdrop/Loading when clicking "GET RESUME"
  const [loading, setLoading] = React.useState(false);
  const [saveButtonLoading, setSaveButtonLoading] = React.useState(false);

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
      case "photo1":
        return <PhotoForm photo={props.photo1} setPhoto={props.setPhoto1} formTitle={"Photo #1"} />;
      case "about1":
        return <AboutForm about={props.about1} setAbout={props.setAbout1} formTitle={"About #1"} />;
      case "name1":
        return <NameForm name={props.name1} setName={props.setName1} formTitle={"Name #1"} />;
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
      case "certifications1":
        return (
          <CertificationsForm
            certifications={props.certifications1}
            setCertifications={props.setCertifications1}
            formTitle={"Certifications #1"}
          />
        );
      case "others1":
        return <OthersForm others={props.others1} setOthers={props.setOthers1} formTitle={"Others #1"} />;
      default:
        return <>chooseFormToShow() does not have {form} in switch case in RightForm.tsx</>;
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
                <div key={eachForm} className="formWrapper" id={eachForm}>
                  {chooseFormToShow(eachForm)}
                </div>
              );
            })}
            <Grid item xs={12} className="formWrapper">
              <Miscellaneous formStyles={props.formStyles} setFormStyles={props.setFormStyles} />
            </Grid>
          </div>
          &nbsp;
          {/* Button to go to ClientDownloadPage */}
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            style={{ marginBottom: 12 }}
            onClick={async (e: React.SyntheticEvent) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(async () => {
                setLoading(false);
                try {
                  props.makeItemsArray(props.layout);
                  logEvent(analytics, MADE_RESUME);
                  navigate("/download");
                } catch (e) {
                  console.error("Error adding document: ", e);
                }
              }, Math.floor(Math.random() * (2000 - 1500)) + 1500);
            }}
          >
            Download&nbsp;&nbsp;Resume
          </Button>
          {/* SAVE THE RESUME */}
          <Button
            color="warning"
            variant="contained"
            size="large"
            fullWidth={true}
            disabled={saveButtonLoading}
            style={{ marginBottom: 36, backgroundColor: "#00ccc9" }}
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(async () => {
                setLoading(false);
                try {
                  props.makeItemsArray(props.layout);
                  console.log(".");
                  // USER ID IS THE RESUME NAME FOR NOW
                  const user: User = await getCurrentUser();
                  const itemsArray = JSON.parse(localStorage.getItem("ItemsArray") as string);
                  const formStyles = JSON.parse(localStorage.getItem("FormStyles") as string);
                  if (formStyles && itemsArray) {
                    await saveResume(formStyles, itemsArray, user.uid);
                  }
                  logEvent(analytics, MADE_RESUME);
                  navigate("/resumes/" + user.uid);
                } catch (error) {
                  console.error(error);
                }
                setSaveButtonLoading(true);
              }, 1500);
            }}
          >
            Save&nbsp;&nbsp;Resume
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
