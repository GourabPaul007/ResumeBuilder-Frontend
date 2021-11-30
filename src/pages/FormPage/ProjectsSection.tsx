import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import { Project } from "../../interfaces/Project";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  textInput: {
    height: 20,
  },
});

export default function ProjectsSection({
  projects,
  setProjects,
}: {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}) {
  const classes = useStyles();
  // useEffect(() => {
  //   console.log(`educations`, educations);
  // }, [educations]);

  function handleChange(
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    id: string
  ) {
    // console.log(`index, event: `, index, event.target.value);
    // const values: any = [...educations];
    // values[index][event.target.name] = event.target.value;

    // I set "i:any" cause im a dumbass who dont know why
    // `Element implicitly has an 'any' type because expression of type 'string' can't be used to index`
    // plz help TwT UwU
    const values = projects.map((singleProject: Project) => {
      if (id === singleProject.id) {
        singleProject[event.target.name] = event.target.value;
      }
      return singleProject;
    });

    setProjects(values);
  }

  const handleAddFields = () => {
    setProjects([
      ...projects,
      {
        id: `project${new Date().toString()}`,
        projectName: "",
        projectDetails: "",
      },
    ]);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...projects];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setProjects(values);
  };

  // TODO: ADD DELETE ICON AND FUNCTIONALITY BESIDE EACH Project
  return (
    <>
      <div
        style={{
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        <Typography align="center" style={{ fontSize: 24 }}>
          Projects:
        </Typography>
        {projects.map((singleProject, index) => (
          <div key={index}>
            <Grid container>
              <Grid item xs={11}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      // required
                      fullWidth
                      label="Project Name"
                      name="projectName"
                      value={singleProject.projectName}
                      onChange={(e) => handleChange(index, e, singleProject.id)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      size="medium"
                      margin="dense"
                      multiline={true}
                      rows={3}
                      // required
                      fullWidth
                      label="Project Details eg. Used this software to accomplish that"
                      name="projectDetails"
                      value={singleProject.projectDetails}
                      onChange={(e) => handleChange(index, e, singleProject.id)}
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
          <Button
            variant="contained"
            onClick={handleAddFields}
            style={{ marginTop: 8, backgroundColor: "#00ccc9" }}
          >
            Add Another
          </Button>
        </Typography>
      </div>
    </>
  );
}
