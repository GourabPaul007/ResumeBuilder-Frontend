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
  const blockClasses = useBlockStyles(props.formStyles);

  const toBeShownRatings = props.ratings.data.length === 0 && props.ratings.title === "" ? dummyRatings : props.ratings;

  return (
    <>
      <div className={blockClasses.blockWrapper}>
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{toBeShownRatings.title}</h2>
        </div>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500 }}>
          {toBeShownRatings.data.map((eachRating, i) => {
            return (
              <div
                key={eachRating.ratingSubject + i}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0px" }}
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
                        props.formStyles.accentColor
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Rating
        name="text-feedback"
        value={5}
        readOnly
        precision={0.5}
        icon={<SquareRoundedIcon style={{ color: props.formStyles.accentColor }} />}
        emptyIcon={<CropSquareRoundedIcon style={{}} />}
      />
      WHAT */}
    </>
  );
};

function getStarsArray(numberOfRatesInStar: number, type: string, color: string): React.ReactNode {
  return (
    <div>
      {[...Array(numberOfRatesInStar)].map((e, i) => chooseIcon(type + "_fill", i, color))}
      {[...Array(5 - numberOfRatesInStar)].map((e, i) => chooseIcon(type + "_empty", i, color))}
    </div>
  );
}
function chooseIcon(iconName: string, key: number, color: string) {
  switch (iconName) {
    case "star_fill":
      return <StarRoundedIcon key={key + "_fill"} style={{ color: color, fontSize: 26 }} />;
    case "star_empty":
      return <StarOutlineRoundedIcon key={key + "_empty"} style={{ color: color, fontSize: 26 }} />;
    case "circle_fill":
      return <CircleIcon key={key + "_fill"} style={{ color: color, fontSize: 22, margin: "2px 2px" }} />;
    case "circle_empty":
      return <CircleOutlinedIcon key={key + "_empty"} style={{ color: color, fontSize: 22, margin: "2px 2px" }} />;
    case "square_fill":
      return <SquareRoundedIcon key={key + "_fill"} style={{ color: color, fontSize: 22, margin: "2px 2px" }} />;
    case "square_empty":
      return <CropDinRoundedIcon key={key + "_empty"} style={{ color: color, fontSize: 22, margin: "2px 2px" }} />;
    default:
      break;
  }
}
