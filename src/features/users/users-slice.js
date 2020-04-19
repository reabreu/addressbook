import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectActiveLanguage } from "../settings/settings-slice";

const RESULTS_PER_PAGE = 50;

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    values: [],
  },
  reducers: {
    add: (state, action) => {
      state.values.push(...action.payload);
    },
    setFetchingStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

/* Actions */
export const { add, setFetchingStatus } = usersSlice.actions;

/* Thunks */
export const fetchUsers = (activeLanguage, pageNumber) => async (dispatch) => {
  const request = await fetch(
    `https://randomuser.me/api/?results=${RESULTS_PER_PAGE}&seed=abc&nat=${activeLanguage.toLowerCase()}&page=${pageNumber}`
  );
  const res = await request.json();

  dispatch(add(res.results));
};

/* Selectors */
const selectUsers = (state) => state.users.values;

export const selectUsersPerLang = createSelector(
  selectUsers,
  selectActiveLanguage,
  (users, activeLanguage) => users.filter((user) => user.nat === activeLanguage)
);

export const selectPagesFetch = createSelector(
  selectUsersPerLang,
  (filteredUsers) => filteredUsers.length / RESULTS_PER_PAGE
);

export default usersSlice.reducer;
