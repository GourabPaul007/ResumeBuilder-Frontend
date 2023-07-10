import { SingleBlockStyle } from "./_SingleBlockStyle";

interface ImageBorder {
  /** border width */
  borderWidth: number;
  /** border style */
  borderStyle: string;
  /** border color */
  borderColor: string;
}

export interface Image {
  /** Image name */
  name: string;
  /* intger number, increase everytime image changes.
  Can't be boolean because react doesnt update view
  when state changes from true to true.(when changing image) */
  hasImage: number;
  /** the height of the image, goes from 0-20, multiplied by 10 when using */
  height: number;
  /** the width of the image, goes from 0-20, multiplied by 10 when using */
  width: number;
  /** the radius of the image, goes from 0-50 */
  radius: number;
  /** Image Border */
  border: ImageBorder;
  style: SingleBlockStyle;
}
