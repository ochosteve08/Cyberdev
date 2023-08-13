import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Randi Sam" },
  { id: "1", name: "Steve Paul" },
  { id: "2", name: "Joy Praise" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const allUsers = (state) => state.users;

export default userSlice.reducer;
