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

import { Course } from "../../interfaces/Course";

export default function Education({
  educations,
  setEducations,
}: {
  educations: Course[];
  setEducations: React.Dispatch<React.SetStateAction<Course[]>>;
}) {
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
    const values = educations.map((singleCourse) => {
      if (id === singleCourse.id) {
        singleCourse[event.target.name] = event.target.value;
      }
      return singleCourse;
    });

    setEducations(values);
  }

  const handleAddFields = () => {
    setEducations([
      ...educations,
      {
        id: `education${new Date().toString()}`,
        courseName: "",
        organizationName: "",
        courseResults: "",
      },
    ]);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...educations];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setEducations(values);
  };

  // TODO: ADD DELETE ICON AND FUNCTIONALITY BESIDE EACH EDUCATION
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          Education:{" "}
        </Typography>
        {educations.map((singleCourse, index) => (
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
                      label="Course Name eg. Bachelors in Science"
                      name="courseName"
                      value={singleCourse.courseName}
                      // onChange={(e) => handleChange(singleCourse.details_of_course, e,index)}
                      onChange={(e) => handleChange(index, e, singleCourse.id)}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      size="small"
                      style={{ paddingRight: 8 }}
                      variant="outlined"
                      margin="dense"
                      // required
                      fullWidth
                      label="Organization Name eg. Massachusetts Institute of Technology"
                      name="nameOfOrganization"
                      value={singleCourse.nameOfOrganization}
                      onChange={(e) => handleChange(index, e, singleCourse.id)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      size="small"
                      // style={{ marginLeft: 8 }}
                      variant="outlined"
                      margin="dense"
                      // required
                      fullWidth
                      label="Result"
                      name="courseResults"
                      value={singleCourse.courseResults}
                      onChange={(e) => handleChange(index, e, singleCourse.id)}
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
