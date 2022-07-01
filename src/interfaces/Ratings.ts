// export interface Rating {
//   id: string;
//   type: "star"|"linear";
//   stars?: 1|2|3|4|5;
//   percentage?: number;
//   courseResults: string;
// }

export interface SingleRating {
  id: string;
  ratingSubject: string;
  // rateInStar?: 1 | 2 | 3 | 4 | 5;
  rateInPercentage: number;
}

export interface Ratings {
  title: string;
  ratingType: "star" | "percent";
  icon: "star" | "circle" | "square";
  data: SingleRating[];
}
