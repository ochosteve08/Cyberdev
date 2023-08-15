import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCount, increaseCount } from "../features/posts/postSlice";
const Header = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <header className="flex justify-between items-center">
      <h1>CyberDev Explore</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"post"}>Post</Link>
          </li>
          <li>
            <Link to={"user"}>Users</Link>
          </li>
        </ul>
        <button onClick={() => dispatch(increaseCount())}>{count}</button>
      </nav>
    </header>
  );
};

export default Header;
