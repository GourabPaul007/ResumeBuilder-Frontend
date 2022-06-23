import { makeStyles } from "@mui/styles";
import { FormStyles } from "../../../interfaces/FormStyles";

export const useBlockStyles = makeStyles(() => ({
  blockWrapper: (formStyles: FormStyles) => ({
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: "sans-serif",
    overflow: "hidden",
  }),
  blockTitleDiv: (formStyles: FormStyles) => ({
    borderBottom: `2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"}`,
    width: formStyles.titleFullWidth ? "100%" : "fit-content",
    marginBottom: 4,
  }),
  blockTitleH2: (formStyles: FormStyles) => ({
    fontWeight: 600,
    fontSize: 24,
    display: "inline-block",
    padding: `2px 6px 2px ${formStyles.titleFilled ? 6 : 0}px`,
    color: formStyles.titleColor,
    backgroundColor: formStyles.titleFilled ? formStyles.titleFillColor : "transparent",
    borderRadius: 5,
    width: formStyles.titleFullWidth ? "100%" : "fit-content",
  }),
}));
