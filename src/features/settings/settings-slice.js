import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const usersSlice = createSlice({
  name: "settings",
  initialState: {
    active: "GB",
    languages: ["CH", "ES", "FR", "GB"],
  },
  reducers: {
    setActiveLanguage: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveLanguage } = usersSlice.actions;

const getSettings = (state) => state.settings;

export const selectActiveLanguage = createSelector(
  getSettings,
  (settings) => settings.active
);

export const selectLanguages = (state) => state.settings.languages;

export default usersSlice.reducer;
