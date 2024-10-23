import { Link } from "react-router-dom";

const Header = () => {
  const avatar = "public/images/image-avatar.png";
  const cartPicture = "public/images/icon-cart.svg";
  return (
    <>
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
      <div>
        <img src={cartPicture} alt="cart" className="cart"></img>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </>
  );
};

export default Header;
