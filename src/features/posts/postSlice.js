import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "learning redux",
    content: "it's coming together",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "learning next",
    content: "it's hot and spicy",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
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
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
export const allPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
