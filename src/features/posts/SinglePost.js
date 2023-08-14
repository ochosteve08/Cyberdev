import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams,Link } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();

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
      <Link
        to={`/post/edit/${post.id}`}
        className="text-blue-500 italic underline"
      >
        Edit Post
      </Link>
      <br/>
      <PostAuthor userId={post.userId} />

      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePost;
