import { makeStyles } from "@mui/styles";
import { FormStyles } from "../../../interfaces/FormStyles";

export const useBlockStyles = makeStyles(() => ({
  blockTitleDiv: (formStyles: FormStyles) => ({
    borderBottom: `2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"}`,
    width: formStyles.titleFullWidth ? "100%" : "fit-content",
    marginBottom: 4,
  }),
  blockTitleH2: (formStyles: FormStyles) => ({
    fontWeight: 600,
    fontSize: 24,
    display: "inline-block",
    padding: `2px 4px 2px ${formStyles.titleFilled ? 4 : 0}px`,
    color: formStyles.titleColor,
    backgroundColor: formStyles.titleFilled ? formStyles.titleFillColor : "transparent",
    borderRadius: 5,
    width: formStyles.titleFullWidth ? "100%" : "fit-content",
  }),
}));
