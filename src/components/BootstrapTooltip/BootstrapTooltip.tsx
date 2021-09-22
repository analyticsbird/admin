/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import { styled } from "@mui/system";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default BootstrapTooltip;
