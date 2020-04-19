import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

/* Actions */
export const { setSearchTerm } = searchSlice.actions;

/* Selectors */
export const selectSearchTerm = (state) => state.search.term;

export default searchSlice.reducer;
