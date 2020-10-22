import { MuiThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import { AppTheme } from "./AppTheme";
import HomeCollections from "./components/HomeCollections";
import HomeEventCategory from "./components/HomeEventCategory";
import HomeEventList from "./components/HomeEventList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <PrimarySearchAppBar />
      <Container maxWidth="lg">
        <HomeCollections />
        <HomeEventCategory />
        <HomeEventList />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
