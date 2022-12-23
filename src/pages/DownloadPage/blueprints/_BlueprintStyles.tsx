import { makeStyles } from "@mui/styles";

// export const useBlueprintStyles = makeStyles(() => ({
//   blueprintWrapper: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 12,
//     paddingBottom: 12,
//     fontFamily: "sans-serif",
//     overflow: "hidden",
//     // fontSize: "15px !important",
//   },
// }));

export const useBlueprintStyles = makeStyles((theme) => ({
  blueprintWrapper: ({
    x,
    y,
    w,
    h,
    bgColor,
    textColor,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    bgColor: string;
    textColor: string;
  }) => ({
    position: "absolute",
    // left: `${x * 4}rem`,
    // top: `${y * 0.62 + (y - 1) * 0.62 + 0.62}rem`,
    // // -3 is for the spacing between 2 horizontal cards
    // width: `${w * 4 - 0.8}rem`,
    // height: `${h * 0.6 + (h - 0.6) * 0.6}rem`,
    left: `${x * 17.5}mm`,
    top: `${y * 10 + (y - 1) * 10 + 10}px`,
    // -3 is for the spacing between 2 horizontal cards
    width: `${w * 17.5 - 3}mm`,
    height: `${h * 10 + (h - 1) * 10}px`,
    borderRadius: 5,
    backgroundColor: bgColor,
    color: textColor,
    // Others
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: "sans-serif",
    overflow: "hidden",
    // fontSize: "15px !important",
  }),
}));

// position: "absolute",
// left: `${x * 17.5}mm`,
// top: `${y * 10 + (y - 1) * 10 + 10}px`,
// // -3 is for the spacing between 2 horizontal cards
// width: `${w * 17.5 - 3}mm`,
// height: `${h * 10 + (h - 1) * 10}px`,

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
