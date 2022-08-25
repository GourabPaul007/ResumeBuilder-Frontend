import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Skills {
  color: string;
  title: string;
  chipRadius: number;
  chipSize: number;
  filled: boolean;
  flipped: boolean;
  data: string[];
  style: SingleBlockStyle;
}
