import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );
    }

    setContent("");
    setTitle("");
  };
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
            !title || !content ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!title || !content}
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
