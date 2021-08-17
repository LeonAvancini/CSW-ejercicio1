import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import personalTheme from "./Theme/personalTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={personalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
