import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch } from "react";
import { useState, FC } from "react";
import { About } from "../../interfaces/About";
import { Course } from "../../interfaces/Course";
import { GridItem } from "../../interfaces/GridItem";
import { Project } from "../../interfaces/Project";
import { Work } from "../../interfaces/Work";
import { AboutWithContactForm } from "./RightForm/AboutWithContactForm";
import { EducationForm } from "./RightForm/EducationsForm";
import { OthersForm } from "./RightForm/OthersForm";
import { ProjectsForm } from "./RightForm/ProjectsForm";
import { SkillsForm } from "./RightForm/SkillsForm";
import { WorksForm } from "./RightForm/WorksForm";

interface RightFormProps {
  makeItemsArray: () => void;
  items: GridItem[];
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
  educations: Course[];
  setEducations: Dispatch<React.SetStateAction<Course[]>>;
  skills: string[];
  setSkills: Dispatch<React.SetStateAction<string[]>>;
  works: Work[];
  setWorks: Dispatch<React.SetStateAction<Work[]>>;
  projects: Project[];
  setProjects: Dispatch<React.SetStateAction<Project[]>>;
  others: string[];
  setOthers: Dispatch<React.SetStateAction<string[]>>;

  forms: string[];
}

export const RightForm: FC<RightFormProps> = (props) => {
  // Return the specific form from passed parameter
  const chooseFormToShow = (form: string): React.ReactNode => {
    switch (form) {
      case "about":
        return <AboutWithContactForm about={props.about} setAbout={props.setAbout} />;
      case "skills":
        return <SkillsForm skills={props.skills} setSkills={props.setSkills} />;
      case "educations":
        return <EducationForm educations={props.educations} setEducations={props.setEducations} />;
      case "works":
        return <WorksForm works={props.works} setWorks={props.setWorks} />;
      case "projects":
        return <ProjectsForm projects={props.projects} setProjects={props.setProjects} />;
      case "others":
        return <OthersForm others={props.others} setOthers={props.setOthers} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        style={{
          paddingLeft: 24,
          paddingRight: 24,
          minHeight: "100vh",
          backgroundColor: "#fafafa",
        }}
      >
        {/* <CssBaseline /> */}
        <div>
          <Grid container>
            <div style={{ height: 10 }}>&nbsp;</div>
            {props.forms.map((eachForm) => {
              return (
                <Grid
                  item
                  xs={12}
                  key={eachForm}
                  style={{
                    boxShadow: "0px 1px 2px #d5d5d7",
                    padding: 16,
                    marginBottom: 16,
                    borderRadius: 8,
                    backgroundColor: "#ffffff",
                  }}
                >
                  {chooseFormToShow(eachForm)}
                </Grid>
              );
            })}
          </Grid>

          <Button
            variant="contained"
            fullWidth={true}
            onClick={async (e) => {
              e.preventDefault();
              props.makeItemsArray();
              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify(props.makeItemsArray()),
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
