import React from "react";
import { render } from "@testing-library/react";
import UserList from "../UserList";
import { usersData } from "./mock/data";

describe("<UserList /> spec", () => {
  it("Matches snapshot", () => {
    const { asFragment } = render(<UserList users={usersData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
