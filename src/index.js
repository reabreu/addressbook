import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./features/router";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
