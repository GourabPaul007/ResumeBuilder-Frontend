import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC } from "react";
import { Contact, ContactBlock } from "../../../../interfaces/Contact";
import { useStyles } from "./_FormsStyles";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import { ColorPicker } from "../../../../Components/ColorPicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ContactFormProps {
  formTitle: string;
  contact: ContactBlock;
  setContact: Dispatch<React.SetStateAction<ContactBlock>>;
}

export const ContactForm: FC<ContactFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFlip = (flipped: boolean) => {
    if (props.contact.flipped === flipped) return;
    props.setContact({ ...props.contact, flipped: flipped });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
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
        <CardActions disableSpacing style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show advanced options"
            style={{ width: 100, borderRadius: 5, backgroundColor: expanded ? "#e0e0e0" : "#f0f0f0" }}
          >
            <ExpandMoreIcon
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}
            />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ margin: 0, padding: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid #777",
                borderRadius: 5,
                padding: 8,
                margin: "4px 0px",
              }}
            >
              <div
                style={{
                  // height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                }}
              >
                Background Color &#9658;&nbsp;
                <ColorPicker
                  color={props.contact.style.bgColor ? props.contact.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setContact({ ...props.contact, style: { ...props.contact.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div
                style={{
                  // height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                }}
              >
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.contact.style.textColor ? props.contact.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setContact({ ...props.contact, style: { ...props.contact.style, textColor: newColor } });
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
});
