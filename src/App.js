/** @format */
import React from "react";
import { ThemeProvider } from "@material-ui/core";

// import SubRouter from "./routes/SubRouter";
// import MainRouter from "./routes/MainRouter";
import Connexion from "./pages/Connexion";
import theme from "./assets/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Connexion />
    </ThemeProvider>
  );
}

export default App;
