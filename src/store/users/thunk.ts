import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get("http://localhost:3001/users");
  return data;
});

export const addUser = createAsyncThunk("user/addUser", async (user: any) => {
  await axios.post("http://localhost:3001/users", user);
  const { data } = await axios.get("http://localhost:3001/users");
  return data;
});
