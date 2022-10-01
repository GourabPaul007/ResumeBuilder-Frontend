import { FormControlLabel, Switch, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { ColorPicker } from "../../../../Components/ColorPicker";
import { accentColorList } from "../../../../helpers/colorDatabase";
import { FormStyles } from "../../../../interfaces/FormStyles";

const useMiscellaneousStyles = makeStyles((theme: Theme) => ({
  miscellaneousWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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

export const Miscellaneous: FC<MiscellaneousProps> = React.memo((props) => {
  const classes = useMiscellaneousStyles();

  const [currentTitleColor, setCurrentTitleColor] = useState(
    props.formStyles.titleColor || accentColorList[Math.floor(Math.random() * accentColorList.length)]
  );
  const [currentTitleFillColor, setCurrentTitleFillColor] = useState(
    props.formStyles.titleFillColor || accentColorList[Math.floor(Math.random() * accentColorList.length)]
  );
  const [currentAccentColor, setCurrentAccentColor] = useState(
    props.formStyles.accentColor || accentColorList[Math.floor(Math.random() * accentColorList.length)]
  );

  // Handling Color Pickers
  const handleChangeTitleColor = (newColor: string) => {
    setCurrentTitleColor(newColor);
  };
  const handleChangeTitleFillColor = (newColor: string) => {
    setCurrentTitleFillColor(newColor);
  };
  const handleChangeAccentColor = (newColor: string) => {
    setCurrentAccentColor(newColor);
  };

  // Handling Switches
  const handleFillTitleChange = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleFilled: checkedStatus });
  };
  const handleTitleUnderline = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleUnderline: checkedStatus });
  };
  const handleTitleFullWidth = (checkedStatus: boolean) => {
    props.setFormStyles({ ...props.formStyles, titleFullWidth: checkedStatus });
  };

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setFormStyles({ ...props.formStyles, titleColor: currentTitleColor });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentTitleColor]);

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setFormStyles({ ...props.formStyles, titleFillColor: currentTitleFillColor });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentTitleFillColor]);

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setFormStyles({ ...props.formStyles, accentColor: currentAccentColor });
    }, 400);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentAccentColor]);

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
              label="Fill Background"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={props.formStyles.titleUnderline}
                  onChange={(e) => handleTitleUnderline(e.target.checked)}
                />
              }
              label="Underline"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={props.formStyles.titleFullWidth}
                  onChange={(e) => handleTitleFullWidth(e.target.checked)}
                />
              }
              label="Full Width"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end" }}>
            {/* the Title Stroke colors */}
            <div className={classes.colorPickerDiv}>
              Title Colors &#9658;&nbsp;
              <ColorPicker color={props.formStyles.titleColor} handleColor={handleChangeTitleColor} />
            </div>
            {/* the Title Fill colors */}
            <div className={classes.colorPickerDiv}>
              Title Fill Color &#9658;&nbsp;
              <ColorPicker color={props.formStyles.titleFillColor} handleColor={handleChangeTitleFillColor} />
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
            <ColorPicker color={props.formStyles.accentColor} handleColor={handleChangeAccentColor} />
          </div>
        </div>
      </section>
    </div>
  );
});
