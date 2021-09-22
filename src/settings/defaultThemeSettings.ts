import red from "@mui/material/colors/red";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme(
  {
    palette: {
      primary: {
        light: "#9cfbff",
        main: "#68c8d5",
        dark: "#2f97a4",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffff75",
        main: "#fed441",
        dark: "#c7a300",
        contrastText: "#000",
      },
      error: red,
    },
    typography: {
      fontFamily: [
        "Muli",
        "Roboto",
        "\"Helvetica\"",
        "Arial",
        "sans-serif",
      ].join(","),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      htmlFontSize: 10,
      body1: {
        fontSize: "1.4rem",
      },
      body2: {
        fontSize: "1.4rem",
      },
    },
  },
);

export default defaultTheme;
