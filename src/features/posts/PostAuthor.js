import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const { user: author } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[userId],
    }),
  });

  return (
    <span>
      By
      {author ? (
        <Link to={`user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};

export default PostAuthor;
