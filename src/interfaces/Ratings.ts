// export interface Rating {
//   id: string;
//   type: "star"|"linear";
//   stars?: 1|2|3|4|5;
//   percentage?: number;
//   courseResults: string;
// }

export interface SingleRating {
  ratingSubject: string;
  rateInStar?: 1 | 2 | 3 | 4 | 5;
  rateInPercentage?: number;
}

export interface Ratings {
  title: string;
  data: SingleRating[];
}
