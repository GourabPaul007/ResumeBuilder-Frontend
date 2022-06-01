import * as React from "react";

import { Autocomplete, Chip, TextField, Typography } from "@mui/material";
import { FC, FunctionComponent } from "react";

interface OthersSectionProps {
  // others: string[];
  setOthers: React.Dispatch<React.SetStateAction<string[]>>;
}

const OthersSection: FunctionComponent<OthersSectionProps> = ({ setOthers }) => {
  const handleChips = (value: string[]) => {
    setOthers(value);
  };

  return (
    <>
      <div
        style={{
          // border: "1px solid #999",
          // paddingTop: 12,
          // paddingBottom: 24,
          // paddingLeft: 36,
          // paddingRight: 36,
          borderRadius: 10,
          marginTop: 24,
        }}
      >
        <Typography align="center" style={{ fontSize: 24, margin: 8 }}>
          Others:{" "}
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
              <Chip color="secondary" variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              // multiline
              // rows="3"
              label="Other Skills & Accomplishments"
              placeholder="Eg. Fluent in 3 Languages, Top 3 in College Sports"
            />
          )}
        />
        {/* Telling Users how to input their data */}
        <Typography align="left" color="#ef6c00" style={{ fontSize: 14, marginTop: 2, marginLeft: 2 }}>
          press enter after typing to input your other activities and skills*
        </Typography>
      </div>
    </>
  );
};

export default OthersSection;
