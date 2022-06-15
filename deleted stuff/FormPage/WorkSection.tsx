import { Button, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import { Work } from "../../interfaces/Work";

interface WorkSectionProps {
  works: Work[];
  setWorks: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkSection: React.FC<WorkSectionProps> = ({ works, setWorks }) => {
  function handleChange(index: number, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, id: string) {
    // console.log(`index, event: `, index, event.target.value);
    // const values: any = [...educations];
    // values[index][event.target.name] = event.target.value;
    // I set "i:any" cause im a dumbass who dont know why
    // `Element implicitly has an 'any' type because expression of type 'string' can't be used to index`
    // plz help TwT UwU
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // Currently commented cause i dont want to fix it rn
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // const values = works.map((singleWork: Work) => {
    //   if (id === singleWork.id) {
    //     singleWork[event.target.name] = event.target.value;
    //   }
    //   return singleWork;
    // });
    // console.log(values);
    // setWorks(values);
  }

  const handleAddFields = () => {
    setWorks([
      ...works,
      {
        id: `work${new Date().toString()}`,
        workOrganizationName: "",
        workDetails: [""],
      },
    ]);
  };

  const handleRemoveFields = (id: string) => {
    const values = [...works];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setWorks(values);
  };

  return (
    <>
      <div
        style={{
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        <Typography align="center" style={{ fontSize: 24 }}>
          Work:
        </Typography>
        {works.map((singleWork, index) => (
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
                      label="Organization Name"
                      name="organizationName"
                      value={singleWork.workOrganizationName}
                      onChange={(e) => handleChange(index, e, singleWork.id)}
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
                      label="Work Details eg. Used this software to accomplish that"
                      name="workDetails"
                      value={singleWork.workDetails.join("<li>")}
                      onChange={(e) => handleChange(index, e, singleWork.id)}
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
            <Typography align="left" color="#ef6c00" style={{ fontSize: 14, marginTop: 0, marginLeft: 2 }}>
              press enter after entering key job details to make different bullet points*
            </Typography>
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

export default WorkSection;
