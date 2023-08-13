import { useSelector } from "react-redux";
import { allUsers } from "../users/userSlice";

const PostAuthor = ({userId}) => {
  const users = useSelector(allUsers);
 const author = users.find(user => user.id === userId)
 console.log(author);


  return <span>By {author? author.name : "unknown author" }</span>;
};

export default PostAuthor;
