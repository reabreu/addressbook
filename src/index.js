import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import getStore from "./store";
import Router from "./features/router";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
