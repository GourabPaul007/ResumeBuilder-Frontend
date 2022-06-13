import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { Course } from "../../../interfaces/Course";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

interface EducationFormProps {
  educations: Course[];
  setEducations: Dispatch<React.SetStateAction<Course[]>>;
}

const count = 3;

export const EducationForm: FC<EducationFormProps> = (props) => {
  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setEducations([
      ...props.educations,
      {
        id: `education${Date.now()}`,
        courseName: "",
        organizationName: "",
        courseResults: "",
      },
    ]);
  };
  const handleRemoveFields = (id: string) => {
    const values = [...props.educations];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    props.setEducations(values);
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleOrganizationNameInput = (organizationName: string, pos: number): void => {
    const newEducations = props.educations.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.organizationName = organizationName;
      }
      return singleEducation;
    });
    props.setEducations(newEducations);
    console.log(props.educations);
  };
  const handleCourseNameInput = (courseName: string, pos: number): void => {
    const newEducations = props.educations.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.courseName = courseName;
      }
      return singleEducation;
    });
    props.setEducations(newEducations);
  };
  const handleCourseResultInput = (courseResults: string, pos: number): void => {
    const newEducations = props.educations.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.courseResults = courseResults;
      }
      return singleEducation;
    });
    props.setEducations(newEducations);
  };

  return (
    <>
      <div style={{ borderRadius: 12, padding: 12, margin: 12 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          Education
        </Typography>

        {props.educations.map((singleCourse, index) => (
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
                      label="Organization Name eg. Massachusetts Institute of Technology"
                      name="nameOfOrganization"
                      value={singleCourse.organizationName}
                      onChange={(e) => handleOrganizationNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <TextField
                        size="small"
                        variant="filled"
                        margin="dense"
                        required
                        fullWidth
                        label="Course Name eg. Bachelors in Computer Science"
                        name="courseName"
                        value={singleCourse.courseName}
                        onChange={(e) => handleCourseNameInput(e.target.value, index)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        size="small"
                        variant="filled"
                        margin="dense"
                        required
                        fullWidth
                        label="Result"
                        name="courseResults"
                        value={singleCourse.courseResults}
                        onChange={(e) => handleCourseResultInput(e.target.value, index)}
                      />
                    </Grid>
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
                    handleRemoveFields(singleCourse.id);
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