import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectActiveLanguage } from "../settings/settings-slice";
import { selectSearchTerm } from "../navigation/search-slice";

const RESULTS_PER_PAGE = 50;

export const STATUS = {
  FETCHING: "fetching",
  IDLE: "idle",
  ERROR: "error",
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    values: [],
    status: STATUS.IDLE,
  },
  reducers: {
    add: (state, action) => {
      const newUsers = action.payload.map((user) => ({
        favorite: false,
        ...user,
      }));
      state.values.push(...newUsers);
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setFavorite: (state, action) => {
      const user = state.values.filter(
        (user) => user.id.value === action.payload.value
      )[0];

      user.favorite = !user.favorite;
    },
  },
});

/* Actions */
export const { add, setStatus, setFavorite } = usersSlice.actions;

/* Thunks */
export const fetchUsers = (activeLanguage, pageNumber) => async (dispatch) => {
  dispatch(setStatus(STATUS.FETCHING));

  try {
    const request = await fetch(
      `https://randomuser.me/api/?results=${RESULTS_PER_PAGE}&seed=abc&nat=${activeLanguage.toLowerCase()}&page=${pageNumber}`
    );
    const res = await request.json();

    dispatch(setStatus(STATUS.IDLE));
    dispatch(add(res.results));
  } catch (error) {
    dispatch(setStatus(STATUS.ERROR));
  }
};

/* Selectors */
const selectUsers = (state) => state.users.values;
export const selectStatus = (state) => state.users.status;

const selectUsersPerLang = createSelector(
  selectUsers,
  selectActiveLanguage,
  (users, activeLanguage) => users.filter((user) => user.nat === activeLanguage)
);

export const selectUsersPerLangAndSearch = createSelector(
  selectUsersPerLang,
  selectSearchTerm,
  (users, searchTerm) => {
    return users.filter((user) => {
      const name = `${user.name.first} ${user.name.last}`.toLocaleLowerCase();
      const search = searchTerm.toLocaleLowerCase();
      return name.startsWith(search);
    });
  }
);

export const selectPagesFetch = createSelector(
  selectUsersPerLang,
  (filteredUsers) => filteredUsers.length / RESULTS_PER_PAGE
);

export default usersSlice.reducer;
