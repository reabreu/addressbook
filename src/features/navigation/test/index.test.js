import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Search from "../";
import store from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Navigation /> spec", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Provider store={store}>
          <Search />
        </Provider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
