import React, { Dispatch, FC } from "react";
import { Ratings } from "../../../interfaces/Ratings";

interface RatingsFormProps {
  formTitle: string;
  ratings: Ratings;
  setRatings: Dispatch<React.SetStateAction<Ratings>>;
}

export const RatingsForm: FC<RatingsFormProps> = (props) => {
  return <>BRUH</>;
};
