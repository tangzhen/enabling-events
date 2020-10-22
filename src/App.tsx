import { MuiThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router";
import { AppTheme } from "./AppTheme";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import HomePage from "./pages/HomePage";

const history = createBrowserHistory();

function App() {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <PrimarySearchAppBar />
      <Container maxWidth="lg">
        <Router history={history}>
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
        </Router>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
