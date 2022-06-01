import * as React from "react";

import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
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
import AppBarHeader from "../Components/AppBarHeader";
import Footer from "../Components/Footer";
import ColorPicker from "./FormPage/ColorPicker";
import PickTemplate from "./FormPage/PickTemplate";
import { RootStateOrAny, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
  getReusmeButton: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "#00ccc9",
    padding: 12,
    // marginTop: 24,
    // marginBottom: 24,
    // backgroundColor: "#00ccc9",
    // padding: 12,
    fontSize: 18,
    borderRadius: 8,
    fontWeight: 500,
    textTransform: "none",
  },
}));

export default function FormPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  // Setting Stuff up
  const [template, setTemplate] = useState<string>("1");
  const [about, setAbout] = useState<About>({
    name: "",
    address: "",
    cityZip: "",
    phNo: "",
    emails: "",
    about: "",
  });
  const [educations, setEducations] = useState<Course[]>([
    {
      id: `education${new Date().toString()}`,
      courseName: "",
      organizationName: "",
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
  const randomColor = "";
  const [accentColor, setAccentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );

  const about1 = useSelector((state: RootStateOrAny) => state.about1);

  // TO IDENTIFY RESUMES ON BACKEND.
  // THIS REQUIRES TO BE SENT TO DOWNLOAD PAGE TO SEARCH FOR EXACT RESUME BY ID IN BACKEND
  let id: string;

  // Handling Post, getting data from user and sending it to the server
  const handlePost = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    id = uuidv4();

    const details = {
      resumeId: "",
      template: "1",
      about: {},
      educations: [{}],
      skills: [""],
      works: [{}],
      projects: [{}],
      others: [""],
      accentColor: "",
    };

    details.resumeId = id;
    details.template = template;
    details.about = about1;
    details.educations = [...educations];
    details.skills = skills;
    details.works = [...works];
    details.projects = [...projects];
    details.others = others;
    details.accentColor = accentColor;

    console.log(details);

    await fetch("http://localhost:5000/api/resume/post-data", {
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
      <AppBarHeader />
      <div>
        <Typography align="center" component="h1" variant="h5" style={{ margin: 24 }}>
          Fill Up to Get Your Resume
        </Typography>
        <Container component="main" maxWidth="md" style={{ border: "1px solid #999", borderRadius: 10, padding: 20 }}>
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
                  navigate(`/download/${id}`);
                }, 1000);
              }}
            >
              <PickTemplate template={template} setTemplate={setTemplate} />

              <AboutSection about={about} setAbout={setAbout} />

              <Education educations={educations} setEducations={setEducations} />

              <Skills skills={skills} setSkills={setSkills} />

              <WorkSection works={works} setWorks={setWorks} />

              <ProjectsSection projects={projects} setProjects={setProjetcs} />

              <OthersSection setOthers={setOthers} />

              <ColorPicker accentColor={accentColor} setAccentColor={setAccentColor} />

              <Button
                className={classes.getReusmeButton}
                type="submit"
                // disabled={loading}
                fullWidth
                variant="contained"
              >
                Get Resume
              </Button>
            </form>
          </div>
        </Container>
        <div style={{ marginTop: 100 }}>&nbsp;</div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
