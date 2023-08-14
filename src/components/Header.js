import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
