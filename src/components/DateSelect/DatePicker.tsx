/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import TextField from "@mui/material/TextField";
import { DateRange } from "@mui/lab/DateRangePicker";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DatePicker:React.FC = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue:any) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
