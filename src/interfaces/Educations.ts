import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Course {
  id: string;
  courseName: string;
  organizationName: string;
  courseDuration: string;
  courseResults: string;
}

export interface Educations {
  title: string;
  data: Course[];
  style: SingleBlockStyle;
}
