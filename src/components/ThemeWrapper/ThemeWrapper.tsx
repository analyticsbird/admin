/* eslint-disable no-unused-vars */
import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "settings/defaultThemeSettings";

interface PropTypes {
    children: React.ReactNode
}

const ThemeWrapper:React.FC<PropTypes> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);

export default React.memo(ThemeWrapper);
