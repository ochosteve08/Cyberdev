import { useSelector, useDispatch } from "react-redux";
import { selectPostById, DeletePost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams, Link, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
      </section>
    );
  }
  const deletePost = () => {
    dispatch(DeletePost({ id: post.id }));
    navigate("/");
  };

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
      <button onClick={deletePost} className="ml-6 text-red-400 underline">
        Delete Post
      </button>
      <br />
      <PostAuthor userId={post.userId} />

      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePost;
