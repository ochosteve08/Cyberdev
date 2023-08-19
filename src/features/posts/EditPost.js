import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById } from "./postSlice";
import { useUpdatePostMutation } from "./postSlice";
import { useGetUsersQuery } from "../users/userSlice";

const EditPost = () => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const navigate = useNavigate();

  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const { data: users, isSuccess } = useGetUsersQuery("getUsers");

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
      </section>
    );
  }

  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (canSave) {
      try {
        await updatePost({
          id: post.id,
          title,
          body: content,
          reactions: post.reactions,
          userId,
        }).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("failed to edit post", error);
      }
    }
    navigate(`/post/${postId}`);
  };

  let userOptions;
  if (isSuccess) {
    userOptions = users.ids.map((userId) => (
      <option key={userId} value={userId}>
        {users.entities[userId].name}
      </option>
    ));
  }

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold">Edit post</h2>
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
            className="text-black"
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
            Save Post
          </button>
        </form>
      </section>
    </>
  );
};

export default EditPost;
