import { Grid, styled, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC } from "react";
import { About } from "../../../interfaces/About";

interface AboutWithContactFormProps {
  textfieldDefaultProps: {
    variant: "outlined" | "filled" | "standard" | any;
    size: "small" | "medium" | undefined;
    margin: "none" | "normal" | "dense" | undefined;
    required: boolean;
    fullWidth: boolean;
  };
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
}

const useStyles = makeStyles((theme) => ({
  textFilled: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)",
    },
  },
}));

export const AboutWithContactForm: FC<AboutWithContactFormProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          // border: "2px solid rgba(0,0,0,0.05)",
          borderRadius: 8,
          padding: 12,
          margin: 10,
          // backgroundColor: "#F3F4F6BF",
          // backgroundColor: "#FFF",
          // boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Typography align="center" style={{ fontSize: 24, margin: 8 }}>
          About & Contact
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              {...props.textfieldDefaultProps}
              // className={classes.textFilled}
              label="Full Name"
              value={props.about.name}
              onChange={(e) => {
                props.setAbout({ ...props.about, name: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...props.textfieldDefaultProps}
              // className={classes.textFilled}
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
              {...props.textfieldDefaultProps}
              // className={classes.textFilled}
              label="Emails"
              value={props.about.emails.join("<br>")}
              onChange={(e) => {
                props.setAbout({ ...props.about, emails: e.target.value.split("<br>") });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              {...props.textfieldDefaultProps}
              // className={classes.textFilled}
              label="Phone Number"
              value={props.about.phno}
              onChange={(e) => {
                props.setAbout({ ...props.about, phno: e.target.value });
              }}
            />
          </Grid>
        </Grid>
        <TextField
          {...props.textfieldDefaultProps}
          // className={classes.textFilled}
          label="Address"
          value={props.about.address.join("<br>")}
          onChange={(e) => {
            props.setAbout({ ...props.about, address: e.target.value.split("<br>") });
          }}
        />
        <TextField
          {...props.textfieldDefaultProps}
          // className={classes.textFilled}
          multiline
          rows={3}
          // maxRows={3}
          label="Pitch about yourself"
          value={props.about.about}
          onChange={(e) => {
            props.setAbout({ ...props.about, about: e.target.value });
          }}
        />
      </div>
    </>
  );
};
