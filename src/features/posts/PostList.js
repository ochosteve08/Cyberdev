import { useSelector, useDispatch } from "react-redux";
import { allPosts, allPostsError, allPostsStatus } from "./postSlice";

import { fetchPosts } from "./postSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";
const PostList = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(allPosts);
  const status = useSelector(allPostsStatus);
  const error = useSelector(allPostsError);

  console.log(posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  let content;
  if (status === "loading") {
    content = <p>Loading ....</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post,index) => <PostExcerpt key={index} post={post} />);
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold">Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
