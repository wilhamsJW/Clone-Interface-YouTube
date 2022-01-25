import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";

import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#fffff",
      },
      secondary: {
        main: "#263238",
      },
      background: {
        default: darkMode ? "#232323" : "#FFFF",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#FFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
