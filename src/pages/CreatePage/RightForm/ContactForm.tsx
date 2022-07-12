import { Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { Contact } from "../../../interfaces/Contact";
import { useStyles } from "./_FormsStyles";

interface AboutWithContactFormProps {
  formTitle: string;
  contact: Contact;
  setContact: Dispatch<React.SetStateAction<Contact>>;
}

export const ContactForm: FC<AboutWithContactFormProps> = React.memo((props) => {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        {props.formTitle}
      </Typography>
      <Grid container columnSpacing={2}>
        <Grid item xs={4}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Title"
            onChange={(e) => {}}
          />
        </Grid>
      </Grid>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Emails Or Social media links (separate each link with comma ',')"
            value={props.contact.emails.join(",")}
            onChange={(e) => {
              props.setContact({ ...props.contact, emails: e.target.value.split(",") });
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Address"
            value={props.contact.address.join("<br>")}
            onChange={(e) => {
              props.setContact({ ...props.contact, address: e.target.value.split("<br>") });
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
            value={props.contact.phno}
            onChange={(e) => {
              props.setContact({ ...props.contact, phno: e.target.value });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
});
