import React from 'react';
import { AppTheme } from "./AppTheme";
import { MuiThemeProvider } from "@material-ui/core";
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <PrimarySearchAppBar />
    </MuiThemeProvider>
  );
}

export default App;
