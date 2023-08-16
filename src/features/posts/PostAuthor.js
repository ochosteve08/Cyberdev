import { useSelector } from "react-redux";
import { allUsers } from "../users/userSlice";
import { Link } from "react-router-dom";
const PostAuthor = ({ userId }) => {
  const users = useSelector(allUsers);
  const author = users.find((user) => user.id === Number(userId));

  return (
    <span>
      By{" "}
      {author ? (
        <Link to={`user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};

export default PostAuthor;
