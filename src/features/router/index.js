import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../navigation";
import { Loader, Center } from "../users/styles";

const Home = lazy(() => import("../users"));
const Settings = lazy(() => import("../settings"));
const NotFound = lazy(() => import("../notfound"));

export default () => (
  <Router>
    <Suspense
      fallback={
        <Center>
          <Loader />
        </Center>
      }
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Suspense>
  </Router>
);
