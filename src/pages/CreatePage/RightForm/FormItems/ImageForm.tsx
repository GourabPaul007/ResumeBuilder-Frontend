import "./ImageForm.css";

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
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignRightRoundedIcon from "@mui/icons-material/FormatAlignRightRounded";
import { Image } from "../../../../interfaces/Image";

interface ImageFormProps {
  formTitle: string;
  image: Image;
  setImage: Dispatch<React.SetStateAction<Image>>;
}

export const ImageForm: FC<ImageFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const [imageHeightSliderValue, setImageHeightSliderValue] = React.useState(props.image.height);
  const [imageWidthSliderValue, setImageWidthSliderValue] = React.useState(props.image.width);
  const [imageRadiusSliderValue, setImageRadiusSliderValue] = React.useState(props.image.radius);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // On Selecting image from input field
  const handleChangeImage = (imageB64String: string) => {
    // Save Image as base64 to localstorage
    localStorage.setItem("avatarBase64", imageB64String);
    // props.setImage({ ...props.image, hasImage: false });
    props.setImage({ ...props.image, hasImage: props.image.hasImage + 1 });
  };

  const handleImageHeightSlider = (event: Event, newImageHeight: number | number[]) => {
    const sliderValue = Array.isArray(newImageHeight) ? newImageHeight[0] : newImageHeight;
    setImageHeightSliderValue(sliderValue);
    props.setImage({ ...props.image, height: sliderValue * 10 });
  };
  const handleImageWidthSlider = (event: Event, newImageWidth: number | number[]) => {
    const sliderValue = Array.isArray(newImageWidth) ? newImageWidth[0] : newImageWidth;
    setImageWidthSliderValue(sliderValue);
    props.setImage({ ...props.image, width: sliderValue * 10 });
  };
  const handleImageRadiusSlider = (event: Event, newImageWidth: number | number[]) => {
    const sliderValue = Array.isArray(newImageWidth) ? newImageWidth[0] : newImageWidth;
    setImageRadiusSliderValue(sliderValue);
    props.setImage({ ...props.image, radius: sliderValue });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        &nbsp;
        <div className="imageFormBody">
          <div className="imageUploadButtonWrapper">
            <label
              onChange={async (event: any) => {
                try {
                  const selectedImage = event.target.files[0];
                  const b64 = await getBase64(selectedImage);
                  handleChangeImage(b64!.toString());
                } catch (error) {
                  console.error(error);
                }
              }}
              htmlFor="imageUpload"
              className="imageFormUploadButtonLabel"
            >
              Upload
              <input type="file" accept="image/png, image/jpg, image/jpeg" name="imageUpload" id="imageUpload" hidden />
            </label>
          </div>
          {/* Image Size & Border Sliders */}
          <div className="imageFormSliders">
            <Slider
              aria-label="Image Height"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              value={imageHeightSliderValue}
              onChange={handleImageHeightSlider}
            />
            Height
            <div>&nbsp;</div>
            <Slider
              aria-label="Image Width"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              value={imageWidthSliderValue}
              onChange={handleImageWidthSlider}
            />
            Width
            <div>&nbsp;</div>
            <Slider
              aria-label="Image Borde Radius"
              min={0}
              max={50}
              step={2}
              valueLabelDisplay="auto"
              value={imageRadiusSliderValue}
              onChange={handleImageRadiusSlider}
            />
            Radius
          </div>
        </div>
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
                  color={props.image.style.bgColor ? props.image.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setImage({ ...props.image, style: { ...props.image.style, bgColor: newColor } });
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
                  color={props.image.style.textColor ? props.image.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setImage({ ...props.image, style: { ...props.image.style, textColor: newColor } });
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
