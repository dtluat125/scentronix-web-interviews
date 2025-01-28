"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "var(--font-size-6xl)",
      fontWeight: "var(--font-weight-bold)",
    },
  },
  palette: {
    primary: {
      main: "#da1a32",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export default theme;
