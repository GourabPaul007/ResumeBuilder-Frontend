// export interface Rating {
//   id: string;
//   type: "star"|"linear";
//   stars?: 1|2|3|4|5;
//   percentage?: number;
//   courseResults: string;
// }

import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface SingleRating {
  id: string;
  ratingSubject: string;
  rateInPercentage: number;
}

export interface Ratings {
  title: string;
  ratingType: "star" | "percent";
  icon: "star" | "circle" | "square";
  flipped: boolean;
  data: SingleRating[];
  style: SingleBlockStyle;
}
