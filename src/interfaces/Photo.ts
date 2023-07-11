import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Photo {
  /** Image name */
  name: string;
  /* intger number, increase everytime image changes.
  Can't be boolean because react doesnt update view
  when state changes from true to true.(when changing image) */
  hasPhoto: number;
  /** the height of the image, goes from 0-20, multiplied by 10 when using */
  height: number;
  /** the width of the image, goes from 0-20, multiplied by 10 when using */
  width: number;
  /** the radius of the image, goes from 0-50 */
  borderRadius: number;
  /** border width */
  borderWidth: number;
  /** border style */
  borderStyle: string;
  /** border color */
  borderColor: string;
  style: SingleBlockStyle;
}
