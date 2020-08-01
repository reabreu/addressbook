import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/users-slice";
import settingsReducer from "../features/settings/settings-slice";
import searchReducer from "../features/navigation/search-slice";

export default (preloadedState) =>
  configureStore({
    reducer: {
      settings: settingsReducer,
      users: usersReducer,
      search: searchReducer,
    },
    preloadedState,
  });
