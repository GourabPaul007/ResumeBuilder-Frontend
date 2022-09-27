import React, { FC } from "react";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import CropDinRoundedIcon from "@mui/icons-material/CropDinRounded";
import { FormStyles } from "../../../interfaces/FormStyles";
import { Ratings } from "../../../interfaces/Ratings";
import { GridItem } from "../../../interfaces/GridItem";
import { useBlueprintStyles } from "./_BlueprintStyles";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { BlueprintTitle } from "./_BlueprintTitle";

interface RatingBlueprintProps {
  ratings: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    data: Ratings;
  };
  formStyles: FormStyles;
}
export const RatingsBlueprint1: FC<RatingBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.ratings.h,
    x: props.ratings.x,
    y: props.ratings.y,
    w: props.ratings.w,
    bgColor: props.ratings.data.style.bgColor,
    textColor: props.ratings.data.style.textColor,
  });

  return (
    <>
      <div className={blueprintClasses.blueprintWrapper}>
        <BlueprintTitle
          formStyles={props.formStyles}
          title={props.ratings.data.title}
          flipped={props.ratings.data.flipped}
        />
        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500, marginTop: "8px" }}>
          {props.ratings.data.data.map((eachRating, i) => {
            return (
              <div
                key={eachRating.ratingSubject + i}
                style={{
                  display: "flex",
                  flexDirection: props.ratings.data.flipped ? "row-reverse" : "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "4px 0px",
                }}
              >
                <div style={{ margin: "0px 0px 2px 0px" /* for aligning with the starts */ }}>
                  {eachRating.ratingSubject}
                </div>
                <div>
                  {eachRating.rateInPercentage === undefined ? (
                    eachRating.rateInPercentage
                  ) : (
                    <div>
                      {getStarsArray(
                        Math.round(eachRating.rateInPercentage / 20),
                        props.ratings.data.icon,
                        props.formStyles.accentColor,
                        22,
                        props.ratings.data.flipped
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const RatingsBlueprint2: FC<RatingBlueprintProps> = (props) => {
  const blueprintClasses = useBlueprintStyles({
    h: props.ratings.h,
    x: props.ratings.x,
    y: props.ratings.y,
    w: props.ratings.w,
    bgColor: props.ratings.data.style.bgColor,
    textColor: props.ratings.data.style.textColor,
  });

  return (
    <>
      <div className={blueprintClasses.blueprintWrapper}>
        <BlueprintTitle
          formStyles={props.formStyles}
          title={props.ratings.data.title}
          flipped={props.ratings.data.flipped}
        />

        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500, marginTop: "8px" }}>
          {props.ratings.data.data.map((eachRating, i) => {
            return (
              <div
                key={eachRating.ratingSubject + i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: props.ratings.data.flipped ? "flex-end" : "flex-start",
                  margin: "4px 0px",
                }}
              >
                <div style={{ margin: "0px 0px 2px 0px" /* for aligning with the starts */ }}>
                  {eachRating.ratingSubject}
                </div>
                <div>
                  {eachRating.rateInPercentage === undefined ? (
                    eachRating.rateInPercentage
                  ) : (
                    <div>
                      {getStarsArray(
                        Math.round(eachRating.rateInPercentage / 20),
                        props.ratings.data.icon,
                        props.formStyles.accentColor,
                        20,
                        props.ratings.data.flipped
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

function getStarsArray(
  numberOfRatesInStar: number,
  type: string,
  color: string,
  size: number,
  flipped: boolean
): React.ReactNode {
  return flipped ? (
    <div>
      {[...Array(5 - numberOfRatesInStar)].map((e, i) => {
        return <>{chooseIcon(type + "_empty", i, color, size)}</>;
      })}
      {[...Array(numberOfRatesInStar)].map((e, i) => {
        return <>{chooseIcon(type + "_fill", i, color, size)}</>;
      })}
    </div>
  ) : (
    <div>
      {[...Array(numberOfRatesInStar)].map((e, i) => {
        return <>{chooseIcon(type + "_fill", i, color, size)}</>;
      })}
      {[...Array(5 - numberOfRatesInStar)].map((e, i) => {
        return <>{chooseIcon(type + "_empty", i, color, size)}</>;
      })}
    </div>
  );
}
function chooseIcon(iconName: string, key: number, color: string, size: number) {
  switch (iconName) {
    case "star_fill":
      return <StarRoundedIcon key={key + "_fill"} style={{ color: color, fontSize: size + 4 }} />;
    case "star_empty":
      return <StarOutlineRoundedIcon key={key + "_empty"} style={{ color: color, fontSize: size + 4 }} />;
    case "circle_fill":
      return <CircleIcon key={key + "_fill"} style={{ color: color, fontSize: size, margin: "2px 2px" }} />;
    case "circle_empty":
      return <CircleOutlinedIcon key={key + "_empty"} style={{ color: color, fontSize: size, margin: "2px 2px" }} />;
    case "square_fill":
      return <SquareRoundedIcon key={key + "_fill"} style={{ color: color, fontSize: size, margin: "2px 2px" }} />;
    case "square_empty":
      return <CropDinRoundedIcon key={key + "_empty"} style={{ color: color, fontSize: size, margin: "2px 2px" }} />;
    default:
      break;
  }
}
