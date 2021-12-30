import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Paper } from "@mui/material";
import CustomRangePickerModal from "./CustomRangePickerModal";

const DateSelect:React.FC = () => {
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    if (value !== "custom") {
      setAge(value);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
      <Paper sx={{ minWidth: 150, boxShadow: "none" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={age || "allTime"}
            label="Date"
            onChange={handleChange}
            sx={{ maxHeight: 43 }}
          >
            <MenuItem value="allTime">All time</MenuItem>
            <MenuItem value="lastSevenDays">Last seven days</MenuItem>
            <MenuItem value="lastOneMonth">Last one month</MenuItem>
            <MenuItem value="lastSixMonth">Last six months</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <CustomRangePickerModal open={openModal} onClose={setOpenModal} />
    </>
  );
};

export default DateSelect;
