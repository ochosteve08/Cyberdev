import React from "react";
import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "💓",
  rocket: "🚀",
  coffee: "☕",
};
const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionsAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
