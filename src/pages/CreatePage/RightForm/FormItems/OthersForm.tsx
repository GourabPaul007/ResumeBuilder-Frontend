import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, useState } from "react";
import { ColorPicker } from "../../../../Components/ColorPicker";
import { Others } from "../../../../interfaces/Others";
import { useStyles } from "./_FormsStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface OthersFormProps {
  formTitle: string;
  others: Others;
  setOthers: Dispatch<React.SetStateAction<Others>>;
}

export const OthersForm: FC<OthersFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <Card style={{ boxShadow: "none" }}>
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
              multiline={true}
              rows={4}
              InputProps={{ classes: { underline: classes.underline } }}
              label="Other Skills & Activities (Separate each point by adding <br> at the end)"
              value={props.others.data.join("<br>")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setOthers({ ...props.others, data: e.target.value.split("<br>") });
              }}
            />
          </Grid>
        </Grid>
        {/* THE EXTRA OPTIONS */}
        <CardActions disableSpacing style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show advanced options"
            style={{ width: 100, borderRadius: 5, backgroundColor: expanded ? "#e0e0e0" : "#f0f0f0" }}
          >
            <ExpandMoreIcon
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}
            />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ margin: 0, padding: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid #777",
                borderRadius: 5,
                padding: 8,
                margin: "4px 0px",
              }}
            >
              <div className={classes.colorPickerWrapper}>
                Background Color &#9658;&nbsp;
                <ColorPicker
                  color={props.others.style.bgColor ? props.others.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setOthers({ ...props.others, style: { ...props.others.style, bgColor: newColor } });
                  }}
                />
              </div>
              <div className={classes.colorPickerWrapper}>
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.others.style.textColor ? props.others.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setOthers({ ...props.others, style: { ...props.others.style, textColor: newColor } });
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
});
