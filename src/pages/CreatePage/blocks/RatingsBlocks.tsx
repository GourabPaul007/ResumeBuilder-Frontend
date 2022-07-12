import React, { FC } from "react";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import CropDinRoundedIcon from "@mui/icons-material/CropDinRounded";
import { FormStyles } from "../../../interfaces/FormStyles";
import { Ratings } from "../../../interfaces/Ratings";
import { GridItem } from "../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const dummyRatings: Ratings = {
  title: "Language",
  ratingType: "star",
  icon: "square",
  flipped: false,
  data: [
    { id: "1", ratingSubject: "English", rateInPercentage: 75 },
    { id: "2", ratingSubject: "Hindi", rateInPercentage: 75 },
    { id: "3", ratingSubject: "Bengali", rateInPercentage: 100 },
    { id: "4", ratingSubject: "Milf", rateInPercentage: 100 },
  ],
};

interface RatingBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  ratings: Ratings;
  formStyles: FormStyles;
}
export const RatingsBlock1: FC<RatingBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.ratings.flipped });

  const toBeShownRatings = props.ratings.data.length === 0 && props.ratings.title === "" ? dummyRatings : props.ratings;

  return (
    <>
      <div className={blockClasses.blockWrapper}>
        {props.ratings.flipped ? (
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.ratings.flipped}
          />
        ) : null}
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{toBeShownRatings.title}</h2>
        </div>
        {props.ratings.flipped ? null : (
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.ratings.flipped}
          />
        )}
        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500 }}>
          {toBeShownRatings.data.map((eachRating, i) => {
            return (
              <div
                key={eachRating.ratingSubject + i}
                style={{
                  display: "flex",
                  flexDirection: props.ratings.flipped ? "row-reverse" : "row",
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
                        props.ratings.icon,
                        props.formStyles.accentColor,
                        22,
                        props.ratings.flipped
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

export const RatingsBlock2: FC<RatingBlockProps> = (props) => {
  const blockClasses = useBlockStyles({ formStyles: props.formStyles, flipped: props.ratings.flipped });

  const toBeShownRatings = props.ratings.data.length === 0 && props.ratings.title === "" ? dummyRatings : props.ratings;

  return (
    <>
      <div className={blockClasses.blockWrapper}>
        <div style={{ display: "flex", flexDirection: props.ratings.flipped ? "row-reverse" : "row" }}>
          <div className={blockClasses.blockTitleDiv}>
            <h2 className={blockClasses.blockTitleH2}>{toBeShownRatings.title}</h2>
          </div>
          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.ratings.flipped}
          />
        </div>

        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500 }}>
          {toBeShownRatings.data.map((eachRating, i) => {
            return (
              <div
                key={eachRating.ratingSubject + i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: props.ratings.flipped ? "flex-end" : "flex-start",
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
                        props.ratings.icon,
                        props.formStyles.accentColor,
                        20,
                        props.ratings.flipped
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
