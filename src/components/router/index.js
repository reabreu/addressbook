import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navigation";
import { HomePage, SettingsPage } from "../../pages";

export default () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
