import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    grey: string;
  }

  export interface TypeText {
    grey: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D65FC",
      light: "#e3e9ff",
    },
    secondary: {
      main: "#3D65FC",
      light: "#f2f6ff",
    },
    background: {
      default: "#f6f7fa",
    },
    text: {
      primary: "#6D8DFF",
      secondary: "#6D788F",
      grey: "#a3acba",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          overflow: "visible",
        },
      },
    },
  },
});

export default theme;
