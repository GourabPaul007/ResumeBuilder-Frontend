import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface AboutWithContact {
  name: string;
  profession: string;
  address: string[];
  cityZip: string;
  phno: string;
  emails: string[];
  about: string;
  style: SingleBlockStyle;
}
