import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  textField: {
    boxShadow: "inset 3px 3px 5px #ddd, inset -3px -3px 10px #fff",
  },
  underline: {
    "&:before": {
      borderBottomColor: "transparent",
    },
    "&:hover:before": {
      borderBottomColor: ["#ffffff", "!important"],
    },
  },
  colorPickerWrapper: {
    // height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "sans-serif",
  },
}));
