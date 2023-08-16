import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const postAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postAdapter.getInitialState({
  status: "idle",
  error: null,
  count: 0,
});
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POST_URL);

    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(POST_URL, initialPost);

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const UpdatePost = createAsyncThunk(
  "posts/UpdatePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.put(`${POST_URL}/${id}`, initialPost);

      return response.data;
    } catch (error) {
      // return error.message;
      return initialPost; //only for testing redux
    }
  }
);

export const DeletePost = createAsyncThunk(
  "posts/DeletePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.delete(`${POST_URL}/${id}`);
      if (response?.status === 200) return initialPost;
      return `${response?.status} : ${response?.statusText}}`;
    } catch (error) {
      return error.message;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionsAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";

        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          };
          return post;
        });
        postAdapter.upsertMany(state, loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };

        postAdapter.addOne(state, action.payload);
      })
      .addCase(UpdatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("update could not complete");
          console.log(action.payload);
          return;
        }
        console.log(action.payload);
        postAdapter.upsertOne(state, action.payload);
      })

      .addCase(DeletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("could not complete delete");
          console.log(action.payload);
          return;
        }

        postAdapter.removeOne(state, action.payload.id);
      });
  },
});

export default postSlice.reducer;

export const {
  selectAll: allPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postAdapter.getSelectors((state) => state.posts);
export const allPostsStatus = (state) => state.posts.status;
export const allPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

export const selectPostsByUser = createSelector(
  [allPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);
export const { reactionsAdded, increaseCount } = postSlice.actions;
