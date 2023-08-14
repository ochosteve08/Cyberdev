import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  console.log(postId);
  const post = useSelector((state) => selectPostById(state,Number( postId)));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
      </section>
    );
  }

  return (
    <article>
      <h3 className="font-bold text-2xl">{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePost;
