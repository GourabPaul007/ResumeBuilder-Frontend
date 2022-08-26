import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC } from "react";
import { ColorPicker } from "../../../../Components/ColorPicker";
import { About } from "../../../../interfaces/About";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AboutFormProps {
  formTitle: string;
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
}

export const AboutForm: FC<AboutFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container rowSpacing={0} columnSpacing={2}>
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
          <Grid item xs={12}>
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
                  color={props.about.style.bgColor ? props.about.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setAbout({ ...props.about, style: { ...props.about.style, bgColor: newColor } });
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
                  color={props.about.style.textColor ? props.about.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setAbout({ ...props.about, style: { ...props.about.style, textColor: newColor } });
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
