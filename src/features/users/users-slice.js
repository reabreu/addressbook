import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    values: [],
    status: "idle",
  },
  reducers: {
    add: (state, action) => {
      state.values.push(...action.payload);
    },
    setFetchingStatus: (state) => {
      state.status = "fetching";
    },
  },
});

export const { add, setFetchingStatus } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(setFetchingStatus());

  const request = await fetch("https://randomuser.me/api/?results=50");
  const res = await request.json();

  dispatch(add(res.results));
};

export const selectUsers = (state) => state.users.values;

export default usersSlice.reducer;
