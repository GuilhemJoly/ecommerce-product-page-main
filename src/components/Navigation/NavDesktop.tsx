import { Link } from "react-router-dom";

import './NavDesktop.scss';

const NavDesktop = () => {
    return (
        <nav>
        <img src="public/images/logo.svg" alt="logo" className="logo"></img>
        <ul>
            <li>
            <Link to={"#"}>Collections</Link>
            </li>
            <li>
            <Link to={"#"}>Men</Link>
            </li>
            <li>
            <Link to={"#"}>Women</Link>
            </li>
            <li>
            <Link to={"#"}>About</Link>
            </li>
            <li>
            <Link to={"#"}>Contact</Link>
            </li>
        </ul>
      </nav>
    );
}
export default NavDesktop;