import "./NameForm.css";

import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Slider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, useState, useEffect } from "react";
import { ColorPicker } from "../../../../Components/ColorPicker";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Name } from "../../../../interfaces/Name";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignRightRoundedIcon from "@mui/icons-material/FormatAlignRightRounded";

interface NameFormProps {
  formTitle: string;
  name: Name;
  setName: Dispatch<React.SetStateAction<Name>>;
}

export const NameForm: FC<NameFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [fontSizeSliderValue, setFontSizeSliderValue] = useState(props.name.fontSize);

  // Change the value after user has done sliding the font size slider
  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setName({ ...props.name, fontSize: fontSizeSliderValue });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [fontSizeSliderValue]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleFontSizeSlider = (event: Event, newFontSize: number | number[]) => {
    const fontSize = Array.isArray(newFontSize) ? newFontSize[0] : newFontSize;
    setFontSizeSliderValue(fontSize);
  };

  const handleAlignName = (align: "flex-start" | "center" | "flex-end") => {
    if (props.name.align === align) return;
    props.setName({ ...props.name, align: align });
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
              value={props.name.name}
              onChange={(e) => {
                props.setName({ ...props.name, name: e.target.value });
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
              value={props.name.profession}
              onChange={(e) => {
                props.setName({ ...props.name, profession: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={8} className="sliderWrapper">
            <Slider
              aria-label="Chip Radius"
              min={20}
              max={48}
              step={2}
              valueLabelDisplay="auto"
              value={fontSizeSliderValue}
              onChange={handleFontSizeSlider}
            />
            Chip Radius
          </Grid>
          <Grid item xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ButtonGroup variant="contained" size="small">
              <Button
                disabled={props.name.align === "flex-start" ? true : false}
                onClick={() => handleAlignName("flex-start")}
              >
                <FormatAlignLeftRoundedIcon />
              </Button>
              <Button disabled={props.name.align === "center" ? true : false} onClick={() => handleAlignName("center")}>
                <FormatAlignCenterRoundedIcon />
              </Button>
              <Button
                disabled={props.name.align === "flex-end" ? true : false}
                onClick={() => handleAlignName("flex-end")}
              >
                <FormatAlignRightRoundedIcon />
              </Button>
            </ButtonGroup>
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
                  color={props.name.style.bgColor ? props.name.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setName({ ...props.name, style: { ...props.name.style, bgColor: newColor } });
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
                  color={props.name.style.textColor ? props.name.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setName({ ...props.name, style: { ...props.name.style, textColor: newColor } });
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
