import { Autocomplete, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { Dispatch, FC, useEffect, useState } from "react";
import { Skills } from "../../../interfaces/Skills";
import { useStyles } from "./FormsStyles";

interface SkillsFormProps {
  skills: Skills;
  setSkills: Dispatch<React.SetStateAction<Skills>>;
}

export const SkillsForm: FC<SkillsFormProps> = (props) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState<string>(
    "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    })
  );

  useEffect(() => {
    const lastRequest = setTimeout(() => {
      props.setSkills({ ...props.skills, color: currentColor });
    }, 200);
    return () => {
      clearTimeout(lastRequest);
    };
  }, [currentColor]);

  const handleChangeSkillsItemsColor = (newColor: string) => {
    setCurrentColor(newColor);
  };
  return (
    <>
      <div style={{ fontFamily: "sans-serif", fontSize: 16 }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {/* <Grid item xs={4}>
            <TextField {...props.textfieldDefaultProps} />
          </Grid> */}
          <Grid item xs={10}>
            <TextField
              variant="filled"
              size="small"
              margin="dense"
              required={true}
              fullWidth={true}
              InputProps={{ classes: { underline: classes.underline } }}
              label="Skills"
              value={props.skills.data.join(",")}
              onChange={(e) => {
                props.setSkills({ ...props.skills, data: e.target.value.split(",") });
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                height: "100%",
                color: "#777",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              Color &#9658;
              {/* InputColorContainer */}
              <label
                style={{
                  backgroundColor: props.skills.color,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <input
                  style={{ visibility: "hidden" }}
                  type="color"
                  name="colorPicker"
                  value={currentColor}
                  onChange={(e) => handleChangeSkillsItemsColor(e.target.value)}
                />
              </label>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
