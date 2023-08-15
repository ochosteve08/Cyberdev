import React from "react";
import { selectUserById } from "./userSlice";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { allPosts } from "../posts/postSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const posts = allPosts(state);
    return posts.filter((post) => post.userId === Number(userId));
  });

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
      </section>
    );
  }
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link className="underline pl-4 " to={`/post/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol class="list-decimal list-inside ">{postTitles}</ol>
    </section>
  );
};

export default UserPage;
