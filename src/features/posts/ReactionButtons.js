import React from "react";
import { useAddNewPostMutation } from "./postSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "😲",
  heart: "💓",
  rocket: "🚀",
  eyes: "👀",
};
const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddNewPostMutation();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => addReaction({ postId: post.id, reaction: name })}
      >
        {emoji}
        {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
