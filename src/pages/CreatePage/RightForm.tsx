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
  makeItemsArray: (items: any) => void;
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
          boxShadow: "-4px 0px 4px 0px rgba(0, 0, 0, 0.05)",
          paddingLeft: 24,
          paddingRight: 24,
          backgroundColor: "Window",
        }}
      >
        {/* <CssBaseline /> */}
        <div>
          <Grid container>
            {props.forms.map((eachForm) => {
              return (
                <Grid item xs={12} key={eachForm}>
                  {chooseFormToShow(eachForm)}
                </Grid>
              );
            })}
          </Grid>

          <Button
            variant="outlined"
            onClick={async (e) => {
              e.preventDefault();
              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify(props.makeItemsArray(props.items)),
              })
                .then((data) => {
                  console.log(data);
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Get Resume
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
