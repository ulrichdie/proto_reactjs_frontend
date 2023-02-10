/** @format */

import { createTheme } from "@material-ui/core";

const colorSunu = "#C6183D";
// const blanc = "#FFF";
const blanc = "#5A5E6B";
const gris1 = "#5A5E6B";
const gris2 = "#AFAFAF";
const gris3 = "#CECECE";
const gris4 = "#EDEDED";

export default createTheme({
  palette: {
    primary: {
      main: `${blanc}`,
    },
    secondary: {
      main: `${colorSunu}`,
    },
    gris1: {
      main: `${gris1}`,
    },
    gris2: {
      main: `${gris2}`,
    },
    gris3: {
      main: `${gris3}`,
    },
    gris4: {
      main: `${gris4}`,
    },
  },
  typography: {
    tab: {
      fontFamilly: "Arial",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  },
});
