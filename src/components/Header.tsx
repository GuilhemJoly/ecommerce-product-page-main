import './Header.scss';
import NavDesktop from "./Navigation/NavDesktop";

const Header = () => {
  const avatar = "public/images/image-avatar.png";
  const cartPicture = "public/images/icon-cart.svg";
  return (
    <div className="header">
      <NavDesktop />
      <div className="cartAndAvatar">
        <img src={cartPicture} alt="cart" className="cart"></img>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
