import { MuiThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppTheme } from "./AppTheme";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateEventSuccessPage from "./pages/CreateEventSuccess";
import MyEventsPage from "./pages/MyEventsPage";

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <PrimarySearchAppBar />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/events">
                <HomePage />
              </Route>
              <Route exact path="/my-events">
                <MyEventsPage />
              </Route>
              <Route exact path="/events/:id">
                <EventDetailPage />
              </Route>
              <Route exact path="/admin/create-event">
                <CreateEventPage />
              </Route>
              <Route exact path="/admin/success">
                <CreateEventSuccessPage />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </Container>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
