import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <h1>GLOWIE BLOG</h1>
                <ul className="link">
                    <li> <Link to="/">HOME </Link></li>
                    <li><Link to="/create">NEW BLOG</Link></li>
                    
                </ul>

            </div>

        </nav>

     );
}
 
export default Navbar;