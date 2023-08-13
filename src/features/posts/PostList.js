
import { useSelector } from "react-redux";
import { allPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(allPosts);
  

  const renderedPost = posts.map((post) => (
    <article key={post.id}>
      <h3  className="font-bold text-2xl">{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
    </article>
  ));

  return (
    <section>
      <h2 className="text-3xl font-bold">Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
