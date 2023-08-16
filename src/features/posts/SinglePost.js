import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDeletePostMutation } from "./postSlice";
const SinglePost = () => {
  const [deletePost] = useDeletePostMutation();
  const { postId } = useParams();

  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
      </section>
    );
  }
  const DeletePost = async () => {
    try {
      await deletePost({ id: post.id });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
      <button onClick={DeletePost} className="ml-6 text-red-400 underline">
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
