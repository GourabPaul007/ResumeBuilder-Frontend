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
import Education from "./FormPage/EducationSection";
import { Course } from "../interfaces/Course";
import Skills from "./FormPage/Skills";
import AboutSection from "./FormPage/AboutSection";
import { About } from "../interfaces/About";
import { Project } from "../interfaces/Project";
import WorkSection from "./FormPage/WorkSection";
import ProjectsSection from "./FormPage/ProjectsSection";
import OthersSection from "./FormPage/OthersSection";
import { useNavigate } from "react-router-dom";
import { Work } from "../interfaces/Work";

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

export default function FormPage({ downloadPDF }: { downloadPDF: () => void }) {
  const classes = useStyles();
  const navigate = useNavigate();

  // Setting Stuff up
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
  const [works, setWorks] = useState<Work[]>([
    {
      id: `work${new Date().toString()}`,
      organizationName: "",
      workDetails: "",
    },
  ]);
  const [projects, setProjetcs] = useState<Project[]>([
    {
      id: `project${new Date().toString()}`,
      projectName: "",
      projectDetails: "",
    },
  ]);
  const [others, setOthers] = useState<string[]>([]);

  // Handling Post, getting data from user and sending it to the server
  const handlePost = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    const details = {
      about: {},
      educations: [{}],
      skills: [""],
      works: [{}],
      projects: [{}],
      others: [""],
    };
    details.about = about;
    details.educations = [...educations];
    details.skills = skills;
    details.works = [...works];
    details.projects = [...projects];
    details.others = others;

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
        <Typography
          align="center"
          component="h1"
          variant="h5"
          style={{ margin: 24 }}
        >
          Fill Up to Get Your Resume
        </Typography>
        <Container
          component="main"
          maxWidth="md"
          style={{ border: "1px solid #999", borderRadius: 10, padding: 20 }}
        >
          <CssBaseline />

          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>G</Avatar> */}

            {/* Actual Form */}
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                handlePost(e);
                setTimeout(() => {
                  navigate("/submit");
                }, 1000);
              }}
            >
              <AboutSection about={about} setAbout={setAbout} />

              <Education
                educations={educations}
                setEducations={setEducations}
              />

              <Skills skills={skills} setSkills={setSkills} />

              <WorkSection works={works} setWorks={setWorks} />

              <ProjectsSection projects={projects} setProjects={setProjetcs} />

              <OthersSection setOthers={setOthers} />

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
        </Container>
        <div style={{ marginTop: 400 }}>&nbsp;</div>
      </div>
    </>
  );
}
