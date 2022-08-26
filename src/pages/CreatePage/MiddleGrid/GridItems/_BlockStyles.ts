import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormStyles } from "../../../../interfaces/FormStyles";

export const useBlockStyles = makeStyles(() => ({
  blockWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: "sans-serif",
    overflow: "hidden",
    // fontSize: "15px !important",
  },
  // It works, No idea why
  // blockTitleDiv: ({ formStyles, flipped = false }: { formStyles: FormStyles; flipped?: boolean }) => ({
  //   display: "flex",
  //   justifyContent: flipped ? "flex-end" : "flex-start",
  //   borderTop: `2px solid ${formStyles.titleUnderline ? "transparent" : "transparent"}`,
  //   borderBottom: `2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"}`,
  //   // borderLeft: `2px solid ${formStyles.titleUnderline ? "transparent" : "transparent"}`,
  //   // borderRight: `2px solid ${formStyles.titleUnderline ? "transparent" : "transparent"}`,
  //   backgroundColor: formStyles.titleFilled ? formStyles.titleFillColor : "transparent",
  //   width: formStyles.titleFullWidth ? "100%" : "fit-content",
  //   marginBottom: 4,
  //   marginLeft: flipped ? "auto" : "0px",
  //   borderRadius: formStyles.titleFilled ? 5 : 0,
  // }),
  // blockTitleH2: (props: { formStyles: FormStyles }) => ({
  //   fontWeight: 600,
  //   fontSize: 24,
  //   display: "inline-block",
  //   padding: `3px 6px`,
  //   color: props.formStyles.titleColor,
  // }),
}));
