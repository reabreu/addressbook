import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navigation";

const Home = lazy(() => import("../users"));
const Settings = lazy(() => import("../settings"));

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Suspense>
  </Router>
);
