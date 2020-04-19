import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navigation";
import UsersList from "../users";
import SettingsPanel from "../settings";

export default () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/settings">
        <SettingsPanel />
      </Route>
      <Route path="/">
        <UsersList />
      </Route>
    </Switch>
  </Router>
);
