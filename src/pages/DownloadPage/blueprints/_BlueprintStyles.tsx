import { makeStyles } from "@mui/styles";

export const useBlueprintStyles = makeStyles(() => ({
  blueprintWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: "sans-serif",
    overflow: "hidden",
    // fontSize: "15px !important",
  },
}));

// export class SectionStyles {
//   static sectionWrapper({
//     x,
//     y,
//     w,
//     h,
//     sectionStyle,
//   }: {
//     x: number;
//     y: number;
//     w: number;
//     h: number;
//     sectionStyle: SingleBlockStyle;
//   }): string {
//     // added +10 to height to cover up the blank spaces between blocks(not anymore)
//     // added +10 to top so that the card doesnt get cropped on top
//     return `
//       position: absolute;
//       padding-left: 20px;
//       padding-right: 20px;
//       padding-top: 12px;
//       padding-bottom: 12px;
//       background-color: ${sectionStyle.bgColor ? sectionStyle.bgColor : "#6b5be6"};
//       color: ${sectionStyle.textColor ? sectionStyle.textColor : "#000000"};
//       overflow: hidden;
//       left: ${x * 17.5}mm;
//       top: ${y * 10 + (y - 1) * 10 + 10}px;
//       width: ${w * 17.5 - 3}mm;
//       height: ${h * 10 + (h - 1) * 10}px;
//       border-radius: 5px;
//     `;
//   }

//   // margin: ${getMargin(x, x - 12)}

//   static blockTitleDiv(formStyles: FormStyles, flipped?: boolean): string {
//     return `
//     display: flex;
//     justify-content: ${flipped ? "flex-end" : "flex-start"};
//     border-top: 2px solid ${formStyles.titleUnderline ? "transparent" : "transparent"};
//     border-bottom: 2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"};
//     background-color: ${formStyles.titleFilled ? formStyles.titleFillColor : "transparent"};
//     width: ${formStyles.titleFullWidth ? "100%" : "fit-content"};
//     margin-bottom: 4px;
//     margin-left: ${flipped ? "auto" : "0px"};
//     border-radius: ${formStyles.titleFilled ? "5px" : "0px"};
//     `;
//   }

//   static blockTitleH2(formStyles: FormStyles): string {
//     return `
//       font-weight: 600;
//       font-size: 24px;
//       display: inline-block;
//       padding: 3px 6px;
//       margin: 0px;
//       color: ${formStyles.titleColor};
//     `;
//   }
// }
