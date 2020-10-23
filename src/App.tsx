import { MuiThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppTheme } from "./AppTheme";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <PrimarySearchAppBar />
        <Container maxWidth="lg">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/events/:id">
                <EventDetailPage />
              </Route>
              <Route exact path="/admin/create-event">
                <CreateEventPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
