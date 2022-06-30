import React, { FC } from "react";
import Rating from "@mui/material/Rating";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import { FormStyles } from "../../../interfaces/FormStyles";
import { Ratings } from "../../../interfaces/Ratings";
import { GridItem } from "../../../interfaces/GridItem";
import { useBlockStyles } from "./_BlockStyles";
import { RemoveBlockButton } from "../../../Components/CustomPageComponents";

const dummyRatings: Ratings = {
  title: "Language",
  data: [
    { ratingSubject: "English", rateInStar: 4 },
    { ratingSubject: "Hindi", rateInStar: 4 },
    { ratingSubject: "Bengali", rateInStar: 5 },
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

  const toBeShownRatings = props.ratings.data.length === 0 ? dummyRatings : props.ratings;

  return (
    <>
      <div className={blockClasses.blockWrapper}>
        <div className={blockClasses.blockTitleDiv}>
          <h2 className={blockClasses.blockTitleH2}>{toBeShownRatings.title}</h2>
        </div>
        <RemoveBlockButton item={props.item} removeItem={props.removeItem} blockTitle={props.blockTitle} />
        <div style={{ paddingLeft: 8, fontSize: 15, fontWeight: 500 }}>
          {toBeShownRatings.data.map((eachRating) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between", margin: "8px 0px" }}>
                <div>{eachRating.ratingSubject}</div>
                <div>{eachRating.rateInStar === undefined ? eachRating.rateInPercentage : eachRating.rateInStar}</div>
              </div>
            );
          })}
        </div>
        {/* <div style={{ paddingLeft: 8, fontSize: 15 }}>
        {toBeShownOthers.data.map((eachLine: string) => {
          return (
            <div
              key={eachLine + uuidv1}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                marginBottom: 8,
              }}
            >
              <div>{props.others.bullet === -1 ? "" : String.fromCharCode(props.others.bullet)}&nbsp;&nbsp;</div>
              <div style={{ fontWeight: 500, color: "#434343" }}>{eachLine}</div>
            </div>
          );
        })}
      </div> */}
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

export default Rating;
