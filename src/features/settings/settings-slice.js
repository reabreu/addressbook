import { createSlice } from "@reduxjs/toolkit";

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

export const selectActiveLanguage = (state) => state.settings.active;
export const selectLanguages = (state) => state.settings.languages;

export default usersSlice.reducer;
