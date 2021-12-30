import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import DatePicker from "./DatePicker";

interface SimpleDialogProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  onClose: (value:boolean) => void;
}

const CustomRangePickerModal:React.FC<SimpleDialogProps> = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={false}>
      <DialogTitle>Custom Date Range</DialogTitle>

      <DatePicker />
      <DialogActions>
        <Button variant="outlined" disableElevation onClick={handleClose}>Cancel</Button>
        <Button variant="contained" disableElevation>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomRangePickerModal;
