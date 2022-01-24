import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";

import Home from "./Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fffff",
      },
      secondary: {
        main: "#263238",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
