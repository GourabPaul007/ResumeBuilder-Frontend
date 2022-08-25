import Rating from "@mui/material/Rating";
import React, { Dispatch, FC, useState } from "react";
import { SingleRating, Ratings } from "../../../interfaces/Ratings";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import CircleIcon from "@mui/icons-material/Circle";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useStyles } from "./_FormsStyles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Collapse,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import { ColorPicker } from "../../../Components/ColorPicker";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface RatingsFormProps {
  formTitle: string;
  ratings: Ratings;
  setRatings: Dispatch<React.SetStateAction<Ratings>>;
}

export const RatingsForm: FC<RatingsFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const starStyles = {
    fontSize: 32,
    color: "#ffd600",
  };

  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setRatings({
      ...props.ratings,
      data: [
        ...props.ratings.data,
        {
          id: `rating${Date.now()}`,
          ratingSubject: "",
          rateInPercentage: 100,
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    const ratingsArray = [...props.ratings.data];
    ratingsArray.splice(
      ratingsArray.findIndex((value) => value.id === id),
      1
    );
    props.setRatings({ ...props.ratings, data: ratingsArray });
  };

  // ==================================================================================================================
  // Handle Inputs
  const handleFlip = (flipped: boolean) => {
    if (props.ratings.flipped === flipped) return;
    props.setRatings({ ...props.ratings, flipped: flipped });
  };
  const handleBlockTitleInput = (title: string) => {
    props.setRatings({ ...props.ratings, title: title });
  };
  const handleRatingIconChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.value) {
      case "star":
        props.setRatings({ ...props.ratings, icon: "star" });
        break;
      case "circle":
        props.setRatings({ ...props.ratings, icon: "circle" });
        break;
      case "square":
        props.setRatings({ ...props.ratings, icon: "square" });
        break;
      default:
        props.setRatings({ ...props.ratings, icon: "star" });
        break;
    }
  };
  const handleRatingSubjectInput = (subjectName: string, pos: number): void => {
    const newRatings = props.ratings.data.map((singleRating: SingleRating, index) => {
      if (pos === index) {
        singleRating.ratingSubject = subjectName;
      }
      return singleRating;
    });
    props.setRatings({ ...props.ratings, data: newRatings });
  };
  const handleRatingStarInput = (ratingPercentage: number, pos: number): void => {
    const newRatings = props.ratings.data.map((singleRating: SingleRating, index) => {
      if (pos === index) {
        singleRating.rateInPercentage = ratingPercentage * 20;
      }
      return singleRating;
    });
    props.setRatings({ ...props.ratings, data: newRatings });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container columnSpacing={2} rowSpacing={0} marginBottom={2}>
          <Grid item xs={5}>
            <TextField
              size="small"
              variant="filled"
              margin="dense"
              required
              fullWidth
              InputProps={{ classes: { underline: classes.underline } }}
              label="Title"
              name="title"
              value={props.ratings.title}
              onChange={(e) => handleBlockTitleInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FormControl>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">Rating Icon</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={props.ratings.icon}
                onChange={handleRatingIconChange}
              >
                <FormControlLabel value="star" control={<Radio />} label={<StarRoundedIcon fontSize="large" />} />
                <FormControlLabel value="circle" control={<Radio />} label={<CircleIcon />} />
                <FormControlLabel value="square" control={<Radio />} label={<SquareRoundedIcon />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ButtonGroup variant="contained" size="small">
              <Button
                disabled={props.ratings.flipped ? false : true}
                // style={{ backgroundColor: "#00ccc9" }}
                onClick={() => handleFlip(false)}
              >
                <AlignHorizontalLeftIcon />
              </Button>
              <Button
                disabled={props.ratings.flipped ? true : false}
                // style={{ backgroundColor: "#00ccc9" }}
                onClick={() => handleFlip(true)}
              >
                <AlignHorizontalRightIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {props.ratings.data.map((singleRating, i) => (
          <div key={i}>
            <Grid container>
              <Grid item xs={11}>
                <Grid container columnSpacing={2} rowSpacing={0}>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Subject"
                      value={singleRating.ratingSubject}
                      onChange={(e) => handleRatingSubjectInput(e.target.value, i)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginLeft: 36 }}>
                      <Rating
                        name="simple-controlled"
                        value={Math.round(singleRating.rateInPercentage / 20)}
                        onChange={(event, newValue) => {
                          handleRatingStarInput(newValue ? newValue : 0, i);
                        }}
                        icon={<StarRoundedIcon style={starStyles} />}
                        emptyIcon={<StarOutlineRoundedIcon style={starStyles} />}
                      />
                    </div>
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
                    handleRemoveFields(singleRating.id);
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
            style={{ marginTop: 8, backgroundColor: "#00ccc9" }}
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
              <div className={classes.colorPickerWrapper}>
                Background Color &#9658;&nbsp;
                <ColorPicker
                  color={props.ratings.style.bgColor ? props.ratings.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setRatings({ ...props.ratings, style: { ...props.ratings.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div className={classes.colorPickerWrapper}>
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.ratings.style.textColor ? props.ratings.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setRatings({ ...props.ratings, style: { ...props.ratings.style, textColor: newColor } });
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
