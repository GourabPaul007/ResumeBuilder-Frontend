import { Grid, styled, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC } from "react";
import { About } from "../../../interfaces/About";
import { useStyles } from "./_FormsStyles";

interface AboutFormProps {
  formTitle: string;
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
}

export const AboutForm: FC<AboutFormProps> = React.memo((props) => {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        {props.formTitle}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            InputProps={{
              classes: { underline: classes.underline },
            }}
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            label="Full Name"
            value={props.about.name}
            onChange={(e) => {
              props.setAbout({ ...props.about, name: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Profession"
            value={props.about.profession}
            onChange={(e) => {
              props.setAbout({ ...props.about, profession: e.target.value });
            }}
          />
        </Grid>
      </Grid>
      <TextField
        variant="filled"
        size="small"
        margin="dense"
        required={true}
        fullWidth={true}
        InputProps={{ classes: { underline: classes.underline } }}
        multiline
        rows={3}
        // maxRows={3}
        label="Pitch about yourself"
        value={props.about.about}
        onChange={(e) => {
          props.setAbout({ ...props.about, about: e.target.value });
        }}
      />
    </>
  );
});
