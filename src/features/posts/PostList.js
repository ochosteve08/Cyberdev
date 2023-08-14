import { useSelector } from "react-redux";
import { allPosts, allPostsError, allPostsStatus } from "./postSlice";
import PostExcerpt from "./PostExcerpt";
const PostList = () => {
  const { posts } = useSelector(allPosts);
  const status = useSelector(allPostsStatus);
  const error = useSelector(allPostsError);

  let content;
  if (status === "loading") {
    content = <p>Loading ....</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => (
      <PostExcerpt key={index} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
