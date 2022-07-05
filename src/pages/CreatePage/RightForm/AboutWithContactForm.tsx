import { Grid, styled, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC } from "react";
import NeumorphicTextField from "../../../Components/NeumorphicTextField";
import { AboutWithContact } from "../../../interfaces/AboutWithContact";
import { useStyles } from "./_FormsStyles";

interface AboutWithContactFormProps {
  formTitle: string;
  about: AboutWithContact;
  setAbout: Dispatch<React.SetStateAction<AboutWithContact>>;
}

export const AboutWithContactForm: FC<AboutWithContactFormProps> = React.memo((props) => {
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
              // disableUnderline: true,
              classes: { underline: classes.underline },
              // sx: { boxShadow: "inset 5px 5px 10px #eee, inset -5px -5px 10px #fff" },
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Emails"
            value={props.about.emails.join("<br>")}
            onChange={(e) => {
              props.setAbout({ ...props.about, emails: e.target.value.split("<br>") });
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Phone Number"
            value={props.about.phno}
            onChange={(e) => {
              props.setAbout({ ...props.about, phno: e.target.value });
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
        label="Address"
        value={props.about.address.join("<br>")}
        onChange={(e) => {
          props.setAbout({ ...props.about, address: e.target.value.split("<br>") });
        }}
      />
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
