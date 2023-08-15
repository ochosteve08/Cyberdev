import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import React from "react";

let PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3 className="font-bold text-2xl">{post.title}</h3>
      <p>{post.body.substring(0, 50)}</p>
      <Link to={`/post/${post.id}`} className="text-red-500 italic underline">
        Read more..
      </Link>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </div>
    </article>
  );
};

PostExcerpt = React.memo(PostExcerpt);
export default PostExcerpt;
