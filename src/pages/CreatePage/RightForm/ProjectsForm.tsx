import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { Project, Projects } from "../../../interfaces/Projects";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useStyles } from "./_FormsStyles";

interface ProjectsFormProps {
  formTitle: string;
  projects: Projects;
  setProjects: Dispatch<React.SetStateAction<Projects>>;
}

export const ProjectsForm: FC<ProjectsFormProps> = React.memo((props) => {
  const classes = useStyles();
  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setProjects({
      ...props.projects,
      data: [
        ...props.projects.data,
        {
          id: `project${Date.now()}`,
          projectName: "",
          projectDetails: [""],
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    const projectsArray = [...props.projects.data];
    projectsArray.splice(
      projectsArray.findIndex((value) => value.id === id),
      1
    );
    props.setProjects({ ...props.projects, data: projectsArray });
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setProjects({ ...props.projects, title: title });
  };
  const handleProjectNameInput = (projectName: string, pos: number): void => {
    const newProjects = props.projects.data.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectName = projectName;
      }
      return singleProject;
    });
    props.setProjects({ ...props.projects, data: newProjects });
    console.log(props.projects);
  };
  const handleProjectDetailsInput = (projectDetails: string, pos: number): void => {
    const newProjects = props.projects.data.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectDetails = projectDetails.split("<nl>");
      }
      return singleProject;
    });
    props.setProjects({ ...props.projects, data: newProjects });
  };

  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        {props.formTitle}
      </Typography>
      <Grid container marginBottom={2}>
        <Grid item xs={12}>
          <TextField
            size="small"
            variant="filled"
            margin="dense"
            required
            fullWidth
            InputProps={{ classes: { underline: classes.underline } }}
            label="Title"
            name="title"
            value={props.projects.title}
            onChange={(e) => handleBlockTitleInput(e.target.value)}
          />
        </Grid>
      </Grid>
      {props.projects.data.map((singleProject, index) => (
        <div key={index}>
          <Grid container>
            <Grid item xs={11}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    variant="filled"
                    margin="dense"
                    required
                    fullWidth
                    InputProps={{ classes: { underline: classes.underline } }}
                    label="Project Name"
                    value={singleProject.projectName}
                    onChange={(e) => handleProjectNameInput(e.target.value, index)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    variant="filled"
                    margin="dense"
                    required
                    fullWidth
                    InputProps={{ classes: { underline: classes.underline } }}
                    label="Project Details & Used Technologies"
                    value={singleProject.projectDetails.join("<nl>")}
                    onChange={(e) => handleProjectDetailsInput(e.target.value, index)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={1}
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  handleRemoveFields(singleProject.id);
                }}
              >
                <RemoveCircleOutlineRoundedIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      ))}
      <Typography align="center">
        <Button variant="contained" onClick={handleAddFields} style={{ marginTop: 8, backgroundColor: "#00ccc9" }}>
          Add Another
        </Button>
      </Typography>
    </>
  );
});
