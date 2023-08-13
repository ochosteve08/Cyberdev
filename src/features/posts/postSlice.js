import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "learning redux", content: "it's coming together" },
  { id: "2", title: "learning next", content: "it's hot and spicy" },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
export const allPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
