import { Button, ButtonGroup, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { Contact, ContactBlock } from "../../../interfaces/Contact";
import { useStyles } from "./_FormsStyles";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

interface AboutWithContactFormProps {
  formTitle: string;
  contact: ContactBlock;
  setContact: Dispatch<React.SetStateAction<ContactBlock>>;
}

export const ContactForm: FC<AboutWithContactFormProps> = React.memo((props) => {
  const classes = useStyles();

  const handleFlip = (flipped: boolean) => {
    if (props.contact.flipped === flipped) return;
    props.setContact({ ...props.contact, flipped: flipped });
  };

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
            onChange={(e) => {
              props.setContact({ ...props.contact, title: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ButtonGroup variant="contained" size="small">
            <Button disabled={props.contact.flipped ? false : true} onClick={() => handleFlip(false)}>
              <AlignHorizontalLeftIcon />
            </Button>
            <Button disabled={props.contact.flipped ? true : false} onClick={() => handleFlip(true)}>
              <AlignHorizontalRightIcon />
            </Button>
          </ButtonGroup>
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
            value={props.contact.data.emails.join(",")}
            onChange={(e) => {
              props.setContact({
                ...props.contact,
                data: { ...props.contact.data, emails: e.target.value.split(",") },
              });
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
            value={props.contact.data.address.join("<br>")}
            onChange={(e) => {
              props.setContact({
                ...props.contact,
                data: { ...props.contact.data, address: e.target.value.split("<br>") },
              });
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
            value={props.contact.data.phno}
            onChange={(e) => {
              props.setContact({ ...props.contact, data: { ...props.contact.data, phno: e.target.value } });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
});
