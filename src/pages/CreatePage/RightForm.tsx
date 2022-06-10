import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch } from "react";
import { useState, FC } from "react";
import { About } from "../../interfaces/About";
import { GridItem } from "../../interfaces/GridItem";
import { AboutWithContactForm } from "./RightForm/AboutWithContactForm";
import { SkillsForm } from "./RightForm/SkillsForm";

interface RightFormProps {
  makeItemsArray: (items: any) => void;
  items: GridItem[];
  about: About;
  setAbout: Dispatch<React.SetStateAction<About>>;
  skills: string[];
  setSkills: Dispatch<React.SetStateAction<string[]>>;
}

export const RightForm: FC<RightFormProps> = (props) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #5b5be6",
          borderRadius: 10,
          padding: 8,
          marginTop: 10,
          marginLeft: 12,
          marginRight: 24,
        }}
      >
        {/* <CssBaseline /> */}
        <div>
          <Grid container>
            <Grid item xs={12}>
              <AboutWithContactForm
                textfieldDefaultProps={textfieldDefaultProps}
                about={props.about}
                setAbout={props.setAbout}
              />
            </Grid>

            <Grid item xs={12}>
              <SkillsForm
                textfieldDefaultProps={textfieldDefaultProps}
                skills={props.skills}
                setSkills={props.setSkills}
              />
            </Grid>
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

const textfieldDefaultProps: {
  variant: "outlined" | "filled" | "standard" | any;
  size: "small" | "medium" | undefined;
  margin: "none" | "normal" | "dense" | undefined;
  required: boolean;
  fullWidth: boolean;
} = {
  variant: "outlined",
  size: "small",
  margin: "normal",
  required: true,
  fullWidth: true,
};
