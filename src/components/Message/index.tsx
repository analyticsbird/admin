/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, { useCallback, useEffect } from "react";

import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, any>((
  props,
  ref,
// eslint-disable-next-line react/jsx-props-no-spreading
) => <MuiAlert elevation={6} ref={ref} {...props} />);

interface PropTypes{
    msg: string;
    duration?: number;
    type?: "success" | "error" | "warning" | "info";
}

const CustomizedSnackbars:React.FC<PropTypes> = ({ msg, duration = 3000, type = "success" }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  const handleClose = (event:any, reason:any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "none",
          },
        }}
        className="shadow"
        autoHideDuration={duration}
        onClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          { msg }
        </Alert>
      </Snackbar>
    </>
  );
};

interface MessageTypes{
  msg: string;
  duration?: number;
}

const Success:React.FC<MessageTypes> = ({ msg, duration = 3000 }) => <CustomizedSnackbars duration={duration} msg={msg} type="success" />;

export const Error:React.FC<MessageTypes> = ({ msg, duration = 3000 }) => <CustomizedSnackbars duration={duration} msg={msg} type="error" />;

export const Warning:React.FC<MessageTypes> = ({ msg, duration = 3000 }) => <CustomizedSnackbars duration={duration} msg={msg} type="warning" />;

export const Info:React.FC<MessageTypes> = ({ msg, duration = 3000 }) => <CustomizedSnackbars duration={duration} msg={msg} type="info" />;

export default Success;
