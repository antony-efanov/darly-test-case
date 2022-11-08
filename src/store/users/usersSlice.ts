import { createSlice } from "@reduxjs/toolkit";
import { getUsers, addUser } from "./thunk";
import { InitialState } from "./types";

const initialState: InitialState = {
  users: [],
  loading: "pending",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.users = [];
        state.loading = "pending";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = "success";
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = "error";
      })
      .addCase(addUser.pending, (state) => {
        state.users = [];
        state.loading = "pending";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = "success";
      })
      .addCase(addUser.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export default usersSlice.reducer;
