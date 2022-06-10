import { Grid, TextField, Typography } from "@mui/material";
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

export const AboutWithContactForm: FC<AboutWithContactFormProps> = (props) => {
  return (
    <>
      <div style={{ border: "1px solid #666", borderRadius: 12, padding: 12, margin: 12 }}>
        <Typography align="left" style={{ fontSize: 24, margin: 8 }}>
          About & Contact
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              // sx={{
              //   color: "#ff0000",
              //   borderColor: "yellow",
              //   "&.Mui-focused": { backgroundColor: "#0accff", borderColor: "#f0f" },
              // }}
              {...props.textfieldDefaultProps}
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
          label="Address"
          value={props.about.address.join("<br>")}
          onChange={(e) => {
            props.setAbout({ ...props.about, address: e.target.value.split("<br>") });
          }}
        />
        <TextField
          {...props.textfieldDefaultProps}
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
