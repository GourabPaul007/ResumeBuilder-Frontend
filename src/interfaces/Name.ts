import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Name {
  name: string;
  profession: string;
  fontSize: number;
  align: "flex-start" | "center" | "flex-end";
  style: SingleBlockStyle;
}
