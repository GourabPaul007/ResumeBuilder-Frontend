import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch } from "react";
import { useState, FC } from "react";
import { About } from "../../interfaces/About";
import { Course } from "../../interfaces/Course";
import { GridItem } from "../../interfaces/GridItem";
import { AboutWithContactForm } from "./RightForm/AboutWithContactForm";
import { EducationForm } from "./RightForm/EducationsForm";
import { SkillsForm } from "./RightForm/SkillsForm";

interface RightFormProps {
  makeItemsArray: (items: any) => void;
  items: GridItem[];
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
  skills: string[];
  setSkills: Dispatch<React.SetStateAction<string[]>>;
  educations: Course[];
  setEducations: Dispatch<React.SetStateAction<Course[]>>;
  forms: string[];
}

export const RightForm: FC<RightFormProps> = (props) => {
  const hasItemInArray = (passedItem: string): boolean => {
    if (props.forms.includes(passedItem)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div
        style={{
          // borderLeft: "3px solid #5b5be6",
          // borderRadius: 10,
          boxShadow: "-4px 0px 4px 0px rgba(0, 0, 0, 0.05)",
          paddingLeft: 24,
          // paddingTop: 10,
          marginRight: 24,
          // minHeight: "100vh",
          backgroundColor: "Window",
        }}
      >
        {/* <CssBaseline /> */}
        <div>
          <Grid container>
            {props.forms.map((eachForm) => {
              return (
                <Grid item xs={12} key={eachForm}>
                  {(() => {
                    switch (eachForm) {
                      case "about":
                        return (
                          // <Grid item xs={12}>
                          <AboutWithContactForm
                            textfieldDefaultProps={textfieldDefaultProps}
                            about={props.about}
                            setAbout={props.setAbout}
                          />
                          // </Grid>
                        );
                      case "skills":
                        return (
                          <SkillsForm
                            textfieldDefaultProps={textfieldDefaultProps}
                            skills={props.skills}
                            setSkills={props.setSkills}
                          />
                        );

                      case "educations":
                        return <EducationForm educations={props.educations} setEducations={props.setEducations} />;

                      default:
                        return null;
                    }
                  })()}
                </Grid>
              );
            })}
          </Grid>

          <Button
            variant="outlined"
            onClick={async (e) => {
              e.preventDefault();
              await fetch("http://localhost:5000/api/custom/custom-resume", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //This is required
                },
                body: JSON.stringify(props.makeItemsArray(props.items)),
              })
                .then((data) => {
                  console.log(data);
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Get Resume
          </Button>
        </div>
      </div>
    </>
  );
};

function chooseFormToShow(
  form: string,
  about: About,
  setAbout: Dispatch<React.SetStateAction<About>>
): React.ReactNode {
  switch (form) {
    case "about":
      return <AboutWithContactForm textfieldDefaultProps={textfieldDefaultProps} about={about} setAbout={setAbout} />;

    default:
      break;
  }
}

const textfieldDefaultProps: {
  variant: "outlined" | "filled" | "standard" | any;
  size: "small" | "medium" | undefined;
  margin: "none" | "normal" | "dense" | undefined;
  required: boolean;
  fullWidth: boolean;
} = {
  variant: "filled",
  size: "small",
  margin: "dense",
  required: true,
  fullWidth: true,
};
