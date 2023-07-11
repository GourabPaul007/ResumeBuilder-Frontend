import "./PhotoForm.css";

import { Card, CardActions, CardContent, Collapse, IconButton, Slider, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import { ColorPicker } from "../../../../Components/ColorPicker";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Photo } from "../../../../interfaces/Photo";

interface PhotoFormProps {
  formTitle: string;
  photo: Photo;
  setPhoto: Dispatch<React.SetStateAction<Photo>>;
}

export const PhotoForm: FC<PhotoFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  // const [photoHeightSliderValue, setPhotoHeightSliderValue] = React.useState(props.photo.height);
  // const [photoWidthSliderValue, setPhotoWidthSliderValue] = React.useState(props.photo.width);
  const [photoSizeSliderValue, setPhotoSizeSliderValue] = React.useState(props.photo.width);
  const [photoRadiusSliderValue, setPhotoRadiusSliderValue] = React.useState(props.photo.borderRadius);
  const [borderWidthSliderValue, setBorderWidthSliderValue] = React.useState(props.photo.borderWidth);

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

  // On Selecting photo from input field
  const handleChangePhoto = (photoB64String: string) => {
    // Save Photo as base64 to localstorage
    localStorage.setItem("avatarBase64", photoB64String);
    // props.setPhoto({ ...props.photo, hasPhoto: false });
    props.setPhoto({ ...props.photo, hasPhoto: props.photo.hasPhoto + 1 });
  };

  // const handlePhotoHeightSlider = (event: Event, newPhotoHeight: number | number[]) => {
  //   const sliderValue = Array.isArray(newPhotoHeight) ? newPhotoHeight[0] : newPhotoHeight;
  //   setPhotoHeightSliderValue(sliderValue);
  //   props.setPhoto({ ...props.photo, height: sliderValue * 10 });
  // };
  // const handlePhotoWidthSlider = (event: Event, newPhotoWidth: number | number[]) => {
  //   const sliderValue = Array.isArray(newPhotoWidth) ? newPhotoWidth[0] : newPhotoWidth;
  //   setPhotoWidthSliderValue(sliderValue);
  //   props.setPhoto({ ...props.photo, width: sliderValue * 10 });
  // };
  const handlePhotoSizeSlider = (event: Event, newPhotoWidth: number | number[]) => {
    const sliderValue = Array.isArray(newPhotoWidth) ? newPhotoWidth[0] : newPhotoWidth;
    setPhotoSizeSliderValue(sliderValue);
    props.setPhoto({ ...props.photo, width: sliderValue * 10, height: sliderValue * 10 });
  };
  const handlePhotoRadiusSlider = (event: Event, newPhotoWidth: number | number[]) => {
    const sliderValue = Array.isArray(newPhotoWidth) ? newPhotoWidth[0] : newPhotoWidth;
    setPhotoRadiusSliderValue(sliderValue);
    props.setPhoto({ ...props.photo, borderRadius: sliderValue });
  };
  const handleBorderWidthSlider = (event: Event, newPhotoWidth: number | number[]) => {
    const sliderValue = Array.isArray(newPhotoWidth) ? newPhotoWidth[0] : newPhotoWidth;
    setBorderWidthSliderValue(sliderValue);
    props.setPhoto({ ...props.photo, borderWidth: sliderValue });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        &nbsp;
        <div className="photoFormBody">
          <div className="photoFormLeft">
            <label
              onChange={async (event: any) => {
                try {
                  const selectedPhoto = event.target.files[0];
                  const b64 = await getBase64(selectedPhoto);
                  handleChangePhoto(b64!.toString());
                } catch (error) {
                  console.error(error);
                }
              }}
              htmlFor="photoUpload"
              className="photoFormUploadButtonLabel"
            >
              Upload
              <input type="file" accept="photo/png, photo/jpg, photo/jpeg" name="photoUpload" id="photoUpload" hidden />
            </label>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div style={{ paddingTop: "6px" }}>&nbsp;</div>
            <div className={classes.colorPickerWrapper}>
              Border Color &#9658;&nbsp;
              <ColorPicker
                color={props.photo.borderColor ? props.photo.borderColor : "#123456"}
                height={36}
                handleColor={(newColor: string) => {
                  props.setPhoto({ ...props.photo, borderColor: newColor });
                }}
              />
            </div>
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          {/* Photo Size & Border Sliders */}
          <div className="photoFormRight">
            {/* <Slider
              aria-label="Photo Height"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              value={photoHeightSliderValue}
              onChange={handlePhotoHeightSlider}
            />
            Height
            <div>&nbsp;</div> */}
            {/* <Slider
              aria-label="Photo Width"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              value={photoWidthSliderValue}
              onChange={handlePhotoWidthSlider}
            />
            Width
            <div>&nbsp;</div> */}
            <Slider
              aria-label="Photo Size"
              min={0}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              value={photoSizeSliderValue}
              onChange={handlePhotoSizeSlider}
            />
            Size
            <div>&nbsp;</div>
            <Slider
              aria-label="Photo Borde Radius"
              min={0}
              max={50}
              step={2}
              valueLabelDisplay="auto"
              value={photoRadiusSliderValue}
              onChange={handlePhotoRadiusSlider}
            />
            Border Radius
            <div>&nbsp;</div>
            <Slider
              aria-label="Border Width"
              min={0}
              max={5}
              step={1}
              valueLabelDisplay="auto"
              value={borderWidthSliderValue}
              onChange={handleBorderWidthSlider}
            />
            Border Width
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
                  color={props.photo.style.bgColor ? props.photo.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setPhoto({ ...props.photo, style: { ...props.photo.style, bgColor: newColor } });
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
                  color={props.photo.style.textColor ? props.photo.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setPhoto({ ...props.photo, style: { ...props.photo.style, textColor: newColor } });
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
