import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();

  }
  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          value={title}
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="title">Content:</label>
        <textarea
          type="text"
          value={content}
          id="content"
          name="content"
          onChange={(event) => setContent(event.target.value)}
        />
        <button>Add Post</button>
      </form>
    </section>
  );
};

export default AddPost;
