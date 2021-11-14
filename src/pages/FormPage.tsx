import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import "./FormPage.css";
import Education from "./FormPage/EducationSection";
import { Course } from "../interfaces/Course";
import Skills from "./FormPage/Skills";
import AboutSection from "./FormPage/AboutSection";
import { About } from "../interfaces/About";
import { Project } from "../interfaces/Project";
import ProjectsSection from "./FormPage/ProjectsSection";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 5,
    backgroundColor: orange[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 5,
  },
  submit: {
    marginTop: 12,
    marginBottom: 12,
  },
}));

export default function FormPage() {
  const classes = useStyles();

  const [about, setAbout] = useState<About>({
    name: "",
    address: "",
    cityZip: "",
    phNo: "",
    email: "",
  });
  const [educations, setEducations] = useState<Course[]>([
    {
      id: `education${new Date().toString()}`,
      courseName: "",
      nameOfOrganization: "",
      courseResults: "",
    },
  ]);
  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjetcs] = useState<Project[]>([
    {
      id: `project${new Date().toString()}`,
      projectName: "",
      projectDetails: "",
    },
  ]);

  const handlePost = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const details = {
      about: {},
      educations: [{}],
      skills: [""],
      projects: [{}],
    };
    details.about = about;
    details.educations = [...educations];
    details.skills = skills;
    details.projects = projects;

    console.log(`details before`, details);
    await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //This is required
      },
      body: JSON.stringify(details),
    })
      .then(() => console.log(details))
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          {/* {currentUser && JSON.stringify(currentUser)} */}
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>G</Avatar> */}
            <Typography component="h1" variant="h5">
              Fill Up to Get Your Resume
            </Typography>
            <form className={classes.form} noValidate onSubmit={handlePost}>
              <AboutSection about={about} setAbout={setAbout} />

              <Education
                educations={educations}
                setEducations={setEducations}
              />

              <Skills skills={skills} setSkills={setSkills} />

              <ProjectsSection projects={projects} setProjects={setProjetcs} />

              <Button
                type="submit"
                // disabled={loading}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Get Resume
              </Button>
            </form>
          </div>
          <div style={{ marginTop: 400 }}>&nbsp;</div>
        </Container>
      </div>
    </>
  );
}
