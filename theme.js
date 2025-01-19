import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
export const theme = createTheme({
  typography: {
    fonsFamily: "Poppins sans-serif",
  },
  palette: {
    primary: {
      main: "#D4A353",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
});
