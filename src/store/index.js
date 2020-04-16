import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/users-slice";
import settingsReducer from "../features/settings/settings-slice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    users: usersReducer,
  },
});
