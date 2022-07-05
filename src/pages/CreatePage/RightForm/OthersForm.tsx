import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, useState } from "react";
import { Others } from "../../../interfaces/Others";
import { useStyles } from "./_FormsStyles";

interface OthersFormProps {
  formTitle: string;
  others: Others;
  setOthers: Dispatch<React.SetStateAction<Others>>;
}

export const OthersForm: FC<OthersFormProps> = React.memo((props) => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState("9679");
  // ======================================================
  // Handle Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setOthers({ ...props.others, title: title });
  };
  const handleBulletPoint = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
    props.setOthers({ ...props.others, bullet: parseInt(event.target.value) });
  };

  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        {props.formTitle}
      </Typography>
      <Grid container marginBottom={2} spacing={2}>
        <Grid item xs={7}>
          <TextField
            size="small"
            variant="filled"
            margin="dense"
            required
            fullWidth
            InputProps={{ classes: { underline: classes.underline } }}
            label="Title"
            name="title"
            value={props.others.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleBlockTitleInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <FormControl variant="filled" fullWidth size="small" margin="dense">
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              disableUnderline
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={selectValue}
              onChange={handleBulletPoint}
            >
              <MenuItem value={-1}>&nbsp;&nbsp; &emsp;None</MenuItem>
              <MenuItem value={9679}> &#9679; &emsp;Dot</MenuItem>
              <MenuItem value={9675}> &#9675; &emsp;Circle</MenuItem>
              <MenuItem value={9658}> &#9658; &emsp;Arrow</MenuItem>
              <MenuItem value={9632}> &#9632; &emsp;Box</MenuItem>
              <MenuItem value={9830}> &#9830; &emsp;Diamond</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            size="small"
            margin="dense"
            required={true}
            fullWidth={true}
            InputProps={{ classes: { underline: classes.underline } }}
            label="Other Skills & Activities"
            value={props.others.data.join("<np>")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setOthers({ ...props.others, data: e.target.value.split("<np>") });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
});
