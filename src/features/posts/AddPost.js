import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { allUsers } from "../users/userSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(allUsers);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userId));
    }

    setContent("");
    setTitle("");
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
      ));

      const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  return (
    <section>
      <h2 className="text-3xl font-bold">Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          className="text-gray-800 border-none outline-gray-200 px-3 py-1"
          type="text"
          value={title}
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="author">Author:</label>
        <select
          name="author"
          id="author"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="content">Content:</label>
        <textarea
          className="text-gray-800 border-none outline-gray-200 px-3 py-1"
          type="text"
          value={content}
          id="content"
          name="content"
          onChange={(event) => setContent(event.target.value)}
        />
        <button
          className={`bg-white my-4 text-gray-800 font-semibold hover:bg-white/80 py-1 rounded-md ${
            !canSave ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!canSave}
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
