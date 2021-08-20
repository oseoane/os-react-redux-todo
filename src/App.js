import React from "react";
import "./App.css";
import Root from "./app/components/Root";
import { createTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: blueGrey,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
