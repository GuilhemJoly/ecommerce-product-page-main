import { useState } from 'react';
import CartDropdown from './Cart/CartDropdown';
import './Header.scss';
import NavDesktop from "./Navigation/NavDesktop";
import NotificationBadge from './ui/NotificationBadge';

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
        <div className="cartAndNotificationContainer">
        <img src={cartPicture} alt="cart" className="cart" onClick={toggleOpenCart}></img>
        <NotificationBadge />
        </div>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <CartDropdown isOpen={isOpen} />
    </div>
  );
};

export default Header;
