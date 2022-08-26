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
import React, { Dispatch, FC } from "react";
import { Course, Educations } from "../../../../interfaces/Educations";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useStyles } from "./_FormsStyles";
import { ColorPicker } from "../../../../Components/ColorPicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface EducationFormProps {
  formTitle: string;
  educations: Educations;
  setEducations: Dispatch<React.SetStateAction<Educations>>;
}

export const EducationForm: FC<EducationFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setEducations({
      ...props.educations,
      data: [
        ...props.educations.data,
        {
          id: `education${Date.now()}`,
          courseName: "",
          courseDuration: "",
          organizationName: "",
          courseResults: "",
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    const educationsArray = [...props.educations.data];
    educationsArray.splice(
      educationsArray.findIndex((value) => value.id === id),
      1
    );
    props.setEducations({ ...props.educations, data: educationsArray });
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setEducations({ ...props.educations, title: title });
  };
  const handleOrganizationNameInput = (organizationName: string, pos: number): void => {
    const newEducations = props.educations.data.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.organizationName = organizationName;
      }
      return singleEducation;
    });
    props.setEducations({ ...props.educations, data: newEducations });
    console.log(props.educations);
  };
  const handleCourseNameInput = (courseName: string, pos: number): void => {
    const newEducations = props.educations.data.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.courseName = courseName;
      }
      return singleEducation;
    });
    props.setEducations({ ...props.educations, data: newEducations });
  };
  const handleCourseDurationInput = (courseDuration: string, pos: number): void => {
    const newEducations = props.educations.data.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.courseDuration = courseDuration;
      }
      return singleEducation;
    });
    props.setEducations({ ...props.educations, data: newEducations });
  };
  const handleCourseResultInput = (courseResults: string, pos: number): void => {
    const newEducations = props.educations.data.map((singleEducation: Course, index) => {
      if (pos === index) {
        singleEducation.courseResults = courseResults;
      }
      return singleEducation;
    });
    props.setEducations({ ...props.educations, data: newEducations });
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
              value={props.educations.title}
              onChange={(e) => handleBlockTitleInput(e.target.value)}
            />
          </Grid>
        </Grid>
        {props.educations.data.map((singleCourse, index) => (
          <div key={index}>
            <Grid container marginBottom={2}>
              <Grid item xs={11}>
                <Grid container columnSpacing={2} rowSpacing={0}>
                  <Grid item xs={7}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Organization Name eg. Massachusetts Institute of Technology"
                      name="nameOfOrganization"
                      value={singleCourse.organizationName}
                      onChange={(e) => handleOrganizationNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Duration or Passing year, e.g. 2019-2022"
                      name="courseDuration"
                      value={singleCourse.courseDuration}
                      onChange={(e) => handleCourseDurationInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Course Name eg. Bachelors in Computer Science"
                      name="courseName"
                      value={singleCourse.courseName}
                      onChange={(e) => handleCourseNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Result"
                      name="courseResults"
                      value={singleCourse.courseResults}
                      onChange={(e) => handleCourseResultInput(e.target.value, index)}
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
                    handleRemoveFields(singleCourse.id);
                  }}
                >
                  <RemoveCircleOutlineRoundedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
        <Typography align="center">
          <Button
            size="medium"
            variant="contained"
            onClick={handleAddFields}
            style={{ margin: "8px 0px", backgroundColor: "#00ccc9" }}
          >
            Add Another
          </Button>
        </Typography>
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
                  color={props.educations.style.bgColor ? props.educations.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setEducations({
                      ...props.educations,
                      style: { ...props.educations.style, bgColor: newColor },
                    });
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
                  color={props.educations.style.textColor ? props.educations.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setEducations({
                      ...props.educations,
                      style: { ...props.educations.style, textColor: newColor },
                    });
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
