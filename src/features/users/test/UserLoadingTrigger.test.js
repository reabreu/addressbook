import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import getStore from "../../../store";
import UserLoadingTrigger from "../UserLoadingTrigger";
import { fullStoreEN } from "./mock/full-store-en";

function setupIntersectionObserverMock({
  observe = () => null,
  unobserve = () => null,
} = {}) {
  class IntersectionObserver {
    observe = observe;
    unobserve = unobserve;
    disconnect = unobserve;
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
}

describe("<UserList /> spec", () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  afterEach(() => {
    window.IntersectionObserver = undefined;
  });

  it("Matches initial snapshot with no users and loading spinner", () => {
    const store = getStore();
    const { asFragment } = render(
      <Provider store={store}>
        <UserLoadingTrigger />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Shows message when current lang is full", () => {
    const store = getStore(fullStoreEN);
    const { asFragment } = render(
      <Provider store={store}>
        <UserLoadingTrigger />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Shows button on error to allow manual fetch", () => {
    const store = getStore({
      ...fullStoreEN,
      users: {
        values: [],
        status: "error",
      },
    });
    const { asFragment } = render(
      <Provider store={store}>
        <UserLoadingTrigger />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
