import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { Project } from "../../../interfaces/Project";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

interface ProjectsFormProps {
  projects: Project[];
  setProjects: Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectsForm: FC<ProjectsFormProps> = (props) => {
  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setProjects([
      ...props.projects,
      {
        id: `project${Date.now()}`,
        projectName: "",
        projectDetails: [""],
      },
    ]);
  };
  const handleRemoveFields = (id: string) => {
    const values = [...props.projects];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    props.setProjects(values);
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleProjectNameInput = (projectName: string, pos: number): void => {
    const newProjects = props.projects.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectName = projectName;
      }
      return singleProject;
    });
    props.setProjects(newProjects);
    console.log(props.projects);
  };
  const handleProjectDetailsInput = (projectDetails: string, pos: number): void => {
    const newProjects = props.projects.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectDetails = projectDetails.split("<li>");
      }
      return singleProject;
    });
    props.setProjects(newProjects);
  };

  return (
    <>
      <div style={{ borderRadius: 12, padding: 12, margin: 12 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          Projects
        </Typography>

        {props.projects.map((singleProject, index) => (
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
                      label="Project Details & Used Technologies"
                      value={singleProject.projectDetails.join("<li>")}
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
      </div>
    </>
  );
};
