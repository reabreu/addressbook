import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Settings from "../";
import getStore from "../../../store";

describe("<Settings /> spec", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={getStore()}>
        <Settings />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
