import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Work, Works } from "../../../../interfaces/Works";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ColorPicker } from "../../../../Components/ColorPicker";

interface WorksFormProps {
  formTitle: string;
  works: Works;
  setWorks: Dispatch<React.SetStateAction<Works>>;
}

export const WorksForm: FC<WorksFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setWorks({
      ...props.works,
      data: [
        ...props.works.data,
        {
          id: `work${Date.now()}`,
          workOrganizationName: "",
          workDetails: [""],
          workDuration: "",
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    // remove the work from array where work id is the same as when clicked "X" in UI
    const worksArray = [...props.works.data];
    worksArray.splice(
      worksArray.findIndex((value) => value.id === id),
      1
    );
    props.setWorks({ ...props.works, data: worksArray });
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setWorks({ ...props.works, title: title });
  };
  const handleWorkOrganizationNameInput = (organizationName: string, pos: number): void => {
    const newWorks = props.works.data.map((singleWork: Work, index) => {
      if (pos === index) {
        singleWork.workOrganizationName = organizationName;
      }
      return singleWork;
    });
    props.setWorks({ ...props.works, data: newWorks });
  };
  const handleWorkDetailsInput = (workDetails: string, pos: number): void => {
    const newWorks = props.works.data.map((singleWork: Work, index) => {
      if (pos === index) {
        singleWork.workDetails = workDetails.split("<nl>");
      }
      return singleWork;
    });
    props.setWorks({ ...props.works, data: newWorks });
  };
  const handleWorkDurationInput = (workDuration: string, pos: number): void => {
    const newWorks = props.works.data.map((singleWork: Work, index) => {
      if (pos === index) {
        singleWork.workDuration = workDuration;
      }
      return singleWork;
    });
    props.setWorks({ ...props.works, data: newWorks });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container marginBottom={2}>
          <Grid item xs={12}>
            <TextField
              size="small"
              variant="filled"
              margin="dense"
              required
              fullWidth
              InputProps={{ classes: { underline: classes.underline } }}
              label="Title"
              name="title"
              value={props.works.title}
              onChange={(e) => handleBlockTitleInput(e.target.value)}
            />
          </Grid>
        </Grid>
        {props.works.data.map((singleWork: Work, index) => (
          <div key={index}>
            <Grid container>
              <Grid item xs={11}>
                <Grid container rowSpacing={0} columnSpacing={2}>
                  <Grid item xs={7}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Organization Name eg. Google Inc."
                      name="workOrganizationName"
                      value={singleWork.workOrganizationName}
                      onChange={(e) => handleWorkOrganizationNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Worked Between e.g. Mar 2020 - Present"
                      name="workDuration"
                      value={singleWork.workDuration}
                      onChange={(e) => handleWorkDurationInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Work Details eg. Worked on Stuff"
                      name="workDetails"
                      value={singleWork.workDetails.join("<nl>")}
                      onChange={(e) => handleWorkDetailsInput(e.target.value, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={1}
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    handleRemoveFields(singleWork.id);
                  }}
                >
                  <RemoveCircleOutlineRoundedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
        <Typography align="center">
          <Button variant="contained" onClick={handleAddFields} style={{ marginTop: 8, backgroundColor: "#00ccc9" }}>
            Add Another
          </Button>
        </Typography>
        {/* THE EXTRA OPTIONS */}
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
              <div className={classes.colorPickerWrapper}>
                Background Color &#9658;&nbsp;
                <ColorPicker
                  color={props.works.style.bgColor ? props.works.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setWorks({ ...props.works, style: { ...props.works.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div className={classes.colorPickerWrapper}>
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.works.style.textColor ? props.works.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setWorks({ ...props.works, style: { ...props.works.style, textColor: newColor } });
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
