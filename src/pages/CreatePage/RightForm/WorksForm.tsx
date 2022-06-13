import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Work } from "../../../interfaces/Work";

interface WorksFormProps {
  works: Work[];
  setWorks: Dispatch<React.SetStateAction<Work[]>>;
}

const count = 3;

export const WorksForm: FC<WorksFormProps> = (props) => {
  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setWorks([
      ...props.works,
      {
        id: `work${Date.now()}`,
        workOrganizationName: "",
        workDetails: [""],
      },
    ]);
  };
  const handleRemoveFields = (id: string) => {
    const values = [...props.works];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    props.setWorks(values);
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleWorkOrganizationNameInput = (organizationName: string, pos: number): void => {
    const newWorks = props.works.map((singleWork: Work, index) => {
      if (pos === index) {
        singleWork.workOrganizationName = organizationName;
      }
      return singleWork;
    });
    props.setWorks(newWorks);
    console.log(props.works);
  };
  const handleWorkDetailsInput = (workDetails: string, pos: number): void => {
    const newWorks = props.works.map((singleWork: Work, index) => {
      if (pos === index) {
        singleWork.workDetails = workDetails.split("<li>");
      }
      return singleWork;
    });
    props.setWorks(newWorks);
  };

  return (
    <>
      <div style={{ borderRadius: 12, padding: 12, margin: 12 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          Work History
        </Typography>

        {props.works.map((singleWork, index) => (
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
                      label="Organization Name eg. Google Inc."
                      name="workOrganizationName"
                      value={singleWork.workOrganizationName}
                      onChange={(e) => handleWorkOrganizationNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      label="Work Details eg. Worked on Stuff"
                      name="workDetails"
                      value={singleWork.workDetails.join("<li>")}
                      onChange={(e) => handleWorkDetailsInput(e.target.value, index)}
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
                    handleRemoveFields(singleWork.id);
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
