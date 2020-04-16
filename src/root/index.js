import React from "react";
import { GlobalStyle } from "./styles";
import AppRouter from "../components/router";

export default () => (
  <div className="App">
    <GlobalStyle />
    <AppRouter />
  </div>
);
