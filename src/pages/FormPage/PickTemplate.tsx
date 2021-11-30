import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface PickTemplateProps {
  template: String;
  setTemplate: React.Dispatch<React.SetStateAction<string>>;
}

const PickTemplate: React.FC<PickTemplateProps> = ({
  template,
  setTemplate,
}) => {
  const handleChangeTemplate = (e: SelectChangeEvent<String>) => {
    setTemplate(e.target.value.toString());
  };

  return (
    <Box
      sx={{ minWidth: 120, marginBottom: 2, paddingRight: 1, paddingLeft: 1 }}
    >
      <FormControl fullWidth>
        {/* <InputLabel id="selectTemplate">Choose Template</InputLabel> */}
        <Select
          // labelId="selectTemplate"
          variant="standard"
          // defaultValue={"1"}
          value={template}
          label="Choose Template"
          onChange={(e) => handleChangeTemplate(e)}
        >
          <MenuItem value={"1"}>Elegant</MenuItem>
          <MenuItem value={"2"}>Standard</MenuItem>
          <MenuItem value={"3"}>Informational</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PickTemplate;
