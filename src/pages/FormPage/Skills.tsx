import { Autocomplete, Chip, TextField, Typography } from "@mui/material";
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
      <div
        style={{
          border: "1px solid #999",
          // paddingTop: 12,
          paddingBottom: 24,
          paddingLeft: 36,
          paddingRight: 36,
          borderRadius: 10,marginTop: 24 
        }}
      >
        <Typography style={{ fontSize: 24,margin:8 }}>Skills: </Typography>
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
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Skills"
              placeholder="Eg. ReactJS AngularJS"
            />
          )}
        />
      </div>
    </>
  );
}
