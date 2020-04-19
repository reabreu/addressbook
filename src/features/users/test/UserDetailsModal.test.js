import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import UserDetailsModal from "../UserDetailsModal";
import { usersData } from "./mock/data";

afterEach(cleanup);

describe("<UserDetailsModal /> spec", () => {
  it("Matches snapshot", () => {
    const { getByTestId } = render(
      <UserDetailsModal
        selectedUser={usersData[0]}
        modalIsOpen={true}
        closeModal={() => {}}
      />
    );
    const input = getByTestId("modal-content");
    expect(input.innerHTML).toMatchSnapshot();
  });

  it("Click calls close modal callback", () => {
    const closeModalMock = jest.fn();
    const { getByTestId } = render(
      <UserDetailsModal
        selectedUser={usersData[0]}
        modalIsOpen={true}
        closeModal={closeModalMock}
      />
    );
    const input = getByTestId("close-modal");
    fireEvent.click(input);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});
