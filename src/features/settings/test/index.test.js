import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Settings from "../";
import store from "../../../store";

describe("<Settings /> spec", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Settings />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
