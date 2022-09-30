import React, { FC, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import CropDinRoundedIcon from "@mui/icons-material/CropDinRounded";
import { FormStyles } from "../../../../interfaces/FormStyles";
import { Ratings } from "../../../../interfaces/Ratings";
import { GridItem } from "../../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { RemoveBlockButton } from "../../../../Components/CustomPageComponents";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { BlockTitle } from "./_BlockTitle";

const dummyRatings: Ratings = {
  title: "Language",
  ratingType: "star",
  icon: "square",
  flipped: false,
  data: [
    { id: "1", ratingSubject: "English", rateInPercentage: 75 },
    { id: "2", ratingSubject: "Hindi", rateInPercentage: 75 },
    { id: "3", ratingSubject: "Bengali", rateInPercentage: 100 },
  ],
  style: {
    bgColor: "#fff",
    textColor: "#000",
  },
};

const isEmptyRatings = (ratings: Ratings) => {
  if (ratings.data.length === 0 && ratings.title === "") return true;
  return false;
};

interface RatingBlockProps {
  blockTitle: string;
  item: GridItem;
  removeItem: (item: GridItem) => void;
  ratings: Ratings;
  formStyles: FormStyles;
}
export const RatingsBlock1: FC<RatingBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Ratings
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyRatings(props.ratings));
  }, [props.ratings]);

  const toBeShownRatings = isEmpty ? dummyRatings : props.ratings;

  return (
    <>
      <div
        style={{
          backgroundColor: toBeShownRatings.style.bgColor,
          color: toBeShownRatings.style.textColor,
          height: "100%",
          width: "100%",
        }}
      >
        <div className={blockClasses.blockWrapper}>
          <BlockTitle
            formStyles={props.formStyles}
            title={toBeShownRatings.title}
            isOpaque={isEmpty}
            flipped={props.ratings.flipped}
          />

          <RemoveBlockButton
            item={props.item}
            removeItem={props.removeItem}
            blockTitle={props.blockTitle}
            flipped={props.ratings.flipped}
          />
          <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 600, opacity: isEmpty ? 0.5 : 1, marginTop: "8px" }}>
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
      </div>
    </>
  );
};

export const RatingsBlock2: FC<RatingBlockProps> = (props) => {
  const blockClasses = useBlockStyles();

  // Check For Empty Ratings
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsEmpty(isEmptyRatings(props.ratings));
  }, [props.ratings]);

  const toBeShownRatings = isEmpty ? dummyRatings : props.ratings;
  // const toBeShownRatings = props.ratings.data.length === 0 && props.ratings.title === "" ? dummyRatings : props.ratings;

  return (
    <>
      <div
        style={{
          backgroundColor: toBeShownRatings.style.bgColor,
          color: toBeShownRatings.style.textColor,
          height: "100%",
          width: "100%",
        }}
      >
        <div className={blockClasses.blockWrapper}>
          <div style={{ display: "flex", flexDirection: props.ratings.flipped ? "row-reverse" : "row" }}>
            <BlockTitle
              formStyles={props.formStyles}
              title={toBeShownRatings.title}
              isOpaque={isEmpty}
              flipped={props.ratings.flipped}
            />
            <RemoveBlockButton
              item={props.item}
              removeItem={props.removeItem}
              blockTitle={props.blockTitle}
              flipped={props.ratings.flipped}
            />
          </div>

          <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 600, opacity: isEmpty ? 0.5 : 1, marginTop: "8px" }}>
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
        return <span key={i}>{chooseIcon(type + "_empty", i, color, size)}</span>;
      })}
      {[...Array(numberOfRatesInStar)].map((e, i) => {
        return <span key={i}>{chooseIcon(type + "_fill", i, color, size)}</span>;
      })}
    </div>
  ) : (
    <div>
      {[...Array(numberOfRatesInStar)].map((e, i) => {
        return <span key={i}>{chooseIcon(type + "_fill", i, color, size)}</span>;
      })}
      {[...Array(5 - numberOfRatesInStar)].map((e, i) => {
        return <span key={i}>{chooseIcon(type + "_empty", i, color, size)}</span>;
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
