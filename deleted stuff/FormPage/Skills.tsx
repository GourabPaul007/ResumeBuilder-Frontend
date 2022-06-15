import { Autocomplete, Chip, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function Skills({
  skills,
  setSkills,
}: {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleChips = (value: string[]) => {
    console.log("values", value);
    setSkills(value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ marginTop: 24 }}>
            <Typography align="center" style={{ fontSize: 24, margin: 8 }}>
              Skills:
            </Typography>
            <Autocomplete
              multiple
              onChange={(e, value) => {
                handleChips(value);
              }}
              id="tags-filled"
              options={[]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  // multiline
                  // rows="3"
                  label="Skills"
                  placeholder="Eg. ReactJS AngularJS"
                />
              )}
            />
            <Typography
              align="left"
              color="#ef6c00"
              style={{ fontSize: 14, marginTop: 2, marginLeft: 2 }}
            >
              press enter after typing to input your skills*
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
