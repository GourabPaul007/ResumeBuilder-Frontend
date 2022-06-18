import { FormControlLabel, Switch, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC } from "react";
import { ColorPicker } from "../../../Components/ColorPicker";
import { FormStyles } from "../../../interfaces/FormStyles";

const useMiscellaneousStyles = makeStyles((theme: Theme) => ({
  miscellaneousWrapper: {
    // padding: "24px 0px 24px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: 24,
    // border: "2px solid #aaa",
    // borderRadius: 8,
  },
  colorPickerDiv: {
    height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "sans-serif",
  },
}));

interface MiscellaneousProps {
  formStyles: FormStyles;
  setFormStyles: Dispatch<React.SetStateAction<FormStyles>>;
}

export const Miscellaneous: FC<MiscellaneousProps> = (props) => {
  const classes = useMiscellaneousStyles();

  const setAccentColor = (newColor: string) => {
    props.setFormStyles({ ...props.formStyles, accentColor: newColor });
  };
  const setHeaderColor = (newColor: string) => {
    props.setFormStyles({ ...props.formStyles, titleColor: newColor });
  };
  const setTitleFillColor = (newColor: string) => {
    props.setFormStyles({ ...props.formStyles, titleFillColor: newColor });
  };

  const handleFillTitleChange = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleFilled: checkedStatus });
  };
  const handleTitleUnderline = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleUnderline: checkedStatus });
  };
  const handleTitleFullWidth = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleFullWidth: checkedStatus });
  };

  return (
    <div className={classes.miscellaneousWrapper}>
      <section>
        <Typography align="center" style={{ fontSize: 24 }}>
          Block Titles
        </Typography>
        <div style={{ border: "2px solid #aaa", borderRadius: 8, padding: 24, display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              padding: 12,
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={props.formStyles.titleFilled}
                  onChange={(e) => handleFillTitleChange(e.target.checked)}
                />
              }
              label="Fill Title Background"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={props.formStyles.titleUnderline}
                  onChange={(e) => handleTitleUnderline(e.target.checked)}
                />
              }
              label="Title Underline"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={props.formStyles.titleFullWidth}
                  onChange={(e) => handleTitleFullWidth(e.target.checked)}
                />
              }
              label="Title Full Width"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end" }}>
            {/* the Title Stroke colors */}
            <div className={classes.colorPickerDiv}>
              Title Colors &#9658;&nbsp;
              <ColorPicker color={props.formStyles.titleColor} setColor={setHeaderColor} />
            </div>
            {/* the Title Fill colors */}
            <div className={classes.colorPickerDiv}>
              Title Fill Color &#9658;&nbsp;
              <ColorPicker
                color={props.formStyles.titleFillColor}
                setColor={setTitleFillColor}
                starterColor={"#ffffff"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* the accent color */}
      <section>
        <Typography align="center" style={{ fontSize: 24 }}>
          Other Styles
        </Typography>
        <div style={{ border: "2px solid #aaa", borderRadius: 8, padding: 24, display: "flex" }}>
          <div className={classes.colorPickerDiv}>
            Accent Color &#9658;&nbsp;
            <ColorPicker color={props.formStyles.accentColor} setColor={setAccentColor} />
          </div>
        </div>
      </section>
    </div>
  );
};
