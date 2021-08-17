import { createTheme } from "@material-ui/core/styles";

export const personalTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default personalTheme;
