import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#347B98",
      font: "#fff",
    },
    secondary: {
      main: "#1A3E4C",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
