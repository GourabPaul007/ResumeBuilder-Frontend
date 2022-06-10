import { Autocomplete, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";

interface SkillsFormProps {
  textfieldDefaultProps: {
    variant: "outlined";
    size: "small" | "medium" | undefined;
    margin: "none" | "normal" | "dense" | undefined;
    required: boolean;
    fullWidth: boolean;
  };
  skills: string[];
  setSkills: Dispatch<React.SetStateAction<string[]>>;
}

export const SkillsForm: FC<SkillsFormProps> = (props) => {
  return (
    <>
      <div style={{ border: "1px solid #666", borderRadius: 12, padding: 12, margin: 12 }}>
        <Typography align="left" style={{ fontSize: 24 }}>
          Skills
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField {...props.textfieldDefaultProps} />
          </Grid>

          <Grid item xs={8}>
            <TextField
              {...props.textfieldDefaultProps}
              label="Skills"
              value={props.skills.join(",")}
              onChange={(e) => {
                props.setSkills(e.target.value.split(","));
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
