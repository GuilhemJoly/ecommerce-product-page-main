import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const avatar = "public/images/image-avatar.png";
  const cartPicture = "public/images/icon-cart.svg";
  return (
    <div className="header">
      <nav>
        <h2>sneakers</h2>
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
      <div className="cartAndAvatar">
        <img src={cartPicture} alt="cart" className="cart"></img>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
