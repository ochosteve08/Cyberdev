import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "learning redux", content: "it's coming together" },
  { id: 2, title: "learning next", content: "it's hot and spicy" },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default postSlice.reducer;
export const allPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
