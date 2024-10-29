import { useState } from 'react';
import CartDropdown from './Cart/CartDropdown';
import './Header.scss';
import NavDesktop from "./Navigation/NavDesktop";

const Header = () => {
  const avatar = "public/images/image-avatar.png";
  const cartPicture = "public/images/icon-cart.svg";
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <NavDesktop />
      <div className="cartAndAvatar">
        <img src={cartPicture} alt="cart" className="cart" onClick={toggleOpenCart}></img>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <CartDropdown isOpen={isOpen} />
    </div>
  );
};

export default Header;
