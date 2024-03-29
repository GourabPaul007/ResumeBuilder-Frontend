import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { Skills } from "../../../../interfaces/Skills";
import { useStyles } from "./_FormsStyles";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./SkillsForm.css";
import { ColorPicker } from "../../../../Components/ColorPicker";

interface SkillsFormProps {
  formTitle: string;
  skills: Skills;
  setSkills: Dispatch<React.SetStateAction<Skills>>;
}

export const SkillsForm: FC<SkillsFormProps> = React.memo((props) => {
  const classes = useStyles();

  // Expand More Options
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [currentColor, setCurrentColor] = useState<string>(
    props.skills.color.length > 0
      ? props.skills.color
      : "#000000".replace(/0/g, function () {
          return (~~(Math.random() * 16)).toString(16);
        })
  );
  const [chipRadiusSliderValue, setChipRadiusSliderValue] = useState(props.skills.chipRadius);
  const [chipSizeSliderValue, setChipSizeSliderValue] = useState(props.skills.chipSize);

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, color: currentColor });
    }, 200);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  // Change the value after user has done sliding the chip radius slider
  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, chipRadius: chipRadiusSliderValue });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [chipRadiusSliderValue]);

  // Change the value after user has done sliding the chip size slider
  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, chipSize: chipSizeSliderValue });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [chipSizeSliderValue]);

  const handleFlip = (flipped: boolean) => {
    if (props.skills.flipped === flipped) return;
    props.setSkills({ ...props.skills, flipped: flipped });
  };
  const handleChangeSkillsItemsColor = (newColor: string) => {
    setCurrentColor(newColor);
  };
  const handleCheckFilled = (isFilled: boolean) => {
    console.log(isFilled);
    props.setSkills({ ...props.skills, filled: isFilled });
  };
  const handleChipSizeSlider = (event: Event, newChipSize: number | number[]) => {
    const radius = Array.isArray(newChipSize) ? newChipSize[0] : newChipSize;
    setChipSizeSliderValue(radius);
  };
  const handleChipRadiusSlider = (event: Event, newChipRadius: number | number[]) => {
    const radius = Array.isArray(newChipRadius) ? newChipRadius[0] : newChipRadius;
    // props.setSkills({ ...props.skills, chipRadius: radius });
    setChipRadiusSliderValue(radius);
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container columnSpacing={2} rowSpacing={1}>
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
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#666",
            }}
          >
            Filled
            <Switch checked={props.skills.filled} onChange={(e) => handleCheckFilled(e.target.checked)} />
          </Grid>

          <Grid item xs={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ButtonGroup variant="contained" size="small">
              <Button disabled={props.skills.flipped ? false : true} onClick={() => handleFlip(false)}>
                <AlignHorizontalLeftIcon />
              </Button>
              <Button disabled={props.skills.flipped ? true : false} onClick={() => handleFlip(true)}>
                <AlignHorizontalRightIcon />
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required={true}
              fullWidth={true}
              InputProps={{ classes: { underline: classes.underline } }}
              label="Skills (Separate each skill with comma ',' i.e. Html,Css)"
              value={props.skills.data.join(",")}
              onChange={(e) => {
                props.setSkills({ ...props.skills, data: e.target.value.split(",") });
              }}
            />
          </Grid>

          <Grid item xs={6} className="sliderWrapper">
            <Slider
              aria-label="Chip Radius"
              min={0}
              max={16}
              step={2}
              valueLabelDisplay="auto"
              value={chipRadiusSliderValue}
              onChange={handleChipRadiusSlider}
            />
            Chip Radius
          </Grid>
          <Grid item xs={6} className="sliderWrapper">
            <Slider
              aria-label="Chip Size"
              min={0}
              max={8}
              step={1}
              valueLabelDisplay="auto"
              value={chipSizeSliderValue}
              onChange={handleChipSizeSlider}
            />
            Chip Size
          </Grid>
        </Grid>
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
                  color={props.skills.style.bgColor ? props.skills.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setSkills({ ...props.skills, style: { ...props.skills.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div className={classes.colorPickerWrapper}>
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.skills.style.textColor ? props.skills.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setSkills({ ...props.skills, style: { ...props.skills.style, textColor: newColor } });
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
