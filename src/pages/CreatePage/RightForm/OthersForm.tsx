import { Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { useStyles } from "./FormsStyles";

interface OthersFormProps {
  others: string[];
  setOthers: Dispatch<React.SetStateAction<string[]>>;
}

export const OthersForm: FC<OthersFormProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        Others
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Other Skills & Activities"
            value={props.others.join("<nl>")}
            onChange={(e) => {
              props.setOthers(e.target.value.split("<nl>"));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
