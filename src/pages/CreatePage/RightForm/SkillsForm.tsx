import { Autocomplete, Chip, Grid, Slider, Switch, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { Skills } from "../../../interfaces/Skills";
import { useStyles } from "./FormsStyles";

interface SkillsFormProps {
  formTitle: string;
  skills: Skills;
  setSkills: Dispatch<React.SetStateAction<Skills>>;
}

export const SkillsForm: FC<SkillsFormProps> = (props) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );
  const [sliderValue, setSliderValue] = useState(props.skills.chipRadius);

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, color: currentColor });
    }, 200);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, chipRadius: sliderValue });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [sliderValue]);

  const handleChangeSkillsItemsColor = (newColor: string) => {
    setCurrentColor(newColor);
  };
  const handleCheckFilled = (isFilled: boolean) => {
    console.log(isFilled);
    props.setSkills({ ...props.skills, filled: isFilled });
  };
  const handleChipRadiusSlider = (event: Event, newChipRadius: number | number[]) => {
    const radius = Array.isArray(newChipRadius) ? newChipRadius[0] : newChipRadius;
    // props.setSkills({ ...props.skills, chipRadius: radius });
    setSliderValue(radius);
  };

  return (
    <>
      <div style={{ fontFamily: "sans-serif", fontSize: 16 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container columnSpacing={2} rowSpacing={0}>
          {/* <Grid item xs={4}>
            <TextField {...props.textfieldDefaultProps} />
          </Grid> */}
          <Grid item xs={4}>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required={true}
              fullWidth={true}
              InputProps={{ classes: { underline: classes.underline } }}
              label="Title"
              value={props.skills.title}
              onChange={(e) => {
                props.setSkills({ ...props.skills, title: e.target.value });
              }}
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#666",
            }}
          >
            <Slider
              aria-label="Chip Radius"
              min={0}
              max={16}
              step={2}
              valueLabelDisplay="auto"
              value={sliderValue}
              onChange={handleChipRadiusSlider}
            />
            Chip Radius
          </Grid>
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#666",
            }}
          >
            <Switch checked={props.skills.filled} onChange={(e) => handleCheckFilled(e.target.checked)} />
            Filled
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                height: "100%",
                color: "#666",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Chip Color &#9658;&nbsp;
              {/* InputColorContainer */}
              <label
                style={{
                  backgroundColor: props.skills.color,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.4)",
                  cursor: "pointer",
                }}
              >
                <input
                  style={{ visibility: "hidden" }}
                  type="color"
                  name="colorPicker"
                  value={currentColor}
                  onChange={(e) => handleChangeSkillsItemsColor(e.target.value)}
                />
              </label>
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required={true}
              fullWidth={true}
              InputProps={{ classes: { underline: classes.underline } }}
              label="Skills"
              value={props.skills.data.join(",")}
              onChange={(e) => {
                props.setSkills({ ...props.skills, data: e.target.value.split(",") });
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
