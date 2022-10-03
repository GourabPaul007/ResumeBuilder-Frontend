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
import { Project, Projects } from "../../../../interfaces/Projects";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ColorPicker } from "../../../../Components/ColorPicker";

interface ProjectsFormProps {
  formTitle: string;
  projects: Projects;
  setProjects: Dispatch<React.SetStateAction<Projects>>;
}

export const ProjectsForm: FC<ProjectsFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setProjects({
      ...props.projects,
      data: [
        ...props.projects.data,
        {
          id: `project${Date.now()}`,
          projectName: "",
          projectDetails: [""],
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    const projectsArray = [...props.projects.data];
    projectsArray.splice(
      projectsArray.findIndex((value) => value.id === id),
      1
    );
    props.setProjects({ ...props.projects, data: projectsArray });
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setProjects({ ...props.projects, title: title });
  };
  const handleProjectNameInput = (projectName: string, pos: number): void => {
    const newProjects = props.projects.data.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectName = projectName;
      }
      return singleProject;
    });
    props.setProjects({ ...props.projects, data: newProjects });
    console.log(props.projects);
  };
  const handleProjectDetailsInput = (projectDetails: string, pos: number): void => {
    const newProjects = props.projects.data.map((singleProject: Project, index) => {
      if (pos === index) {
        singleProject.projectDetails = projectDetails.split("<br>");
      }
      return singleProject;
    });
    props.setProjects({ ...props.projects, data: newProjects });
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
              value={props.projects.title}
              onChange={(e) => handleBlockTitleInput(e.target.value)}
            />
          </Grid>
        </Grid>
        {props.projects.data.map((singleProject, index) => (
          <div key={index}>
            <Grid container>
              <Grid item xs={11}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Project Name"
                      value={singleProject.projectName}
                      onChange={(e) => handleProjectNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required={true}
                      fullWidth={true}
                      multiline={true}
                      rows={4}
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Project Details (Separate each point by adding <br> at the end)"
                      value={singleProject.projectDetails.join("<br>")}
                      onChange={(e) => handleProjectDetailsInput(e.target.value, index)}
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
                    handleRemoveFields(singleProject.id);
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
                  color={props.projects.style.bgColor ? props.projects.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setProjects({ ...props.projects, style: { ...props.projects.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div className={classes.colorPickerWrapper}>
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.projects.style.textColor ? props.projects.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setProjects({ ...props.projects, style: { ...props.projects.style, textColor: newColor } });
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
