import React from "react";
import { AppTheme } from "./AppTheme";
import { MuiThemeProvider } from "@material-ui/core";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import HomeCollections from "./components/HomeCollections";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <PrimarySearchAppBar />
      <Container maxWidth="lg">
        <HomeCollections />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
