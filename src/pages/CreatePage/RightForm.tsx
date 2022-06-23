import { Button, Container, CssBaseline, Grid, TextField, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch } from "react";
import { useState, FC } from "react";
import { About } from "../../interfaces/About";
import { Course, Educations } from "../../interfaces/Educations";
import { FormStyles } from "../../interfaces/FormStyles";
import { GridItem } from "../../interfaces/GridItem";
import { Others } from "../../interfaces/Others";
import { Project, Projects } from "../../interfaces/Projects";
import { Skills } from "../../interfaces/Skills";
import { Work, Works } from "../../interfaces/Works";
import { AboutWithContactForm } from "./RightForm/AboutWithContactForm";
import { EducationForm } from "./RightForm/EducationsForm";
import { Miscellaneous } from "./RightForm/MiscellaneousForm";
import { OthersForm } from "./RightForm/OthersForm";
import { ProjectsForm } from "./RightForm/ProjectsForm";
import { SkillsForm } from "./RightForm/SkillsForm";
import { WorksForm } from "./RightForm/WorksForm";
import ReactDOMServer from "react-dom/server";

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
  about1: About;
  setAbout1: Dispatch<React.SetStateAction<About>>;
  about2: About;
  setAbout2: Dispatch<React.SetStateAction<About>>;
  educations: Educations;
  setEducations: Dispatch<React.SetStateAction<Educations>>;
  skills1: Skills;
  setSkills1: Dispatch<React.SetStateAction<Skills>>;
  skills2: Skills;
  setSkills2: Dispatch<React.SetStateAction<Skills>>;
  works: Works;
  setWorks: Dispatch<React.SetStateAction<Works>>;
  projects: Projects;
  setProjects: Dispatch<React.SetStateAction<Projects>>;
  others: Others;
  setOthers: Dispatch<React.SetStateAction<Others>>;
  formStyles: FormStyles;
  setFormStyles: Dispatch<React.SetStateAction<FormStyles>>;
  forms: string[];
}

export const RightForm: FC<RightFormProps> = (props) => {
  const classes = useStyles();

  // Return the specific form from passed parameter
  const chooseFormToShow = (form: string): React.ReactNode => {
    switch (form) {
      case "about1":
        return (
          <AboutWithContactForm about={props.about1} setAbout={props.setAbout1} formTitle={"About & Contact #1"} />
        );
      case "about2":
        return (
          <AboutWithContactForm about={props.about2} setAbout={props.setAbout2} formTitle={"About & Contact #2"} />
        );
      case "skills1":
        return <SkillsForm skills={props.skills1} setSkills={props.setSkills1} formTitle={"Skills #1"} />;
      case "skills2":
        return <SkillsForm skills={props.skills2} setSkills={props.setSkills2} formTitle={"Skills #2"} />;
      case "educations1":
        return (
          <EducationForm educations={props.educations} setEducations={props.setEducations} formTitle={"Education #1"} />
        );
      case "works1":
        return <WorksForm works={props.works} setWorks={props.setWorks} formTitle={"Work #1"} />;
      case "projects1":
        return <ProjectsForm projects={props.projects} setProjects={props.setProjects} formTitle={"Projects #1"} />;
      case "others1":
        return <OthersForm others={props.others} setOthers={props.setOthers} formTitle={"Others #1"} />;
      // case "others2":
      //   return <OthersForm others={props.others} setOthers={props.setOthers} formTitle={"About #1"} />;
      // case "others#2":
      //   return <OthersForm others={props.others} setOthers={props.setOthers} formTitle={"About #1"} />;
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
            onClick={async (e) => {
              e.preventDefault();
              props.makeItemsArray();
              let html = ReactDOMServer.renderToString(
                <div>
                  <>
                    <Typography>Bruh</Typography>
                  </>
                </div>
              );
              console.log(html);

              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify({ blocks: props.makeItemsArray(), formStyles: props.formStyles }),
              })
                .then((response) => response.blob())
                .then((blob) => {
                  let link = document.createElement("a");
                  link.href = window.URL.createObjectURL(blob);
                  link.download = "resume.pdf";
                  link.click();
                })
                .catch((e) => {
                  console.error(e);
                });
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
