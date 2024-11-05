import { CartDropdownProps } from "../../../typescript/types";
import { useCallback, useEffect } from "react";
import { useCart } from "../../customHooks/useCart";
import useOutsideClick from "../../customHooks/useClickOutsideElement";
import { CartItems } from "./CartItems";
import { CartMessage } from "./CartMessage";
import "./styles/CartDropDown.scss";

const CartDropdown: React.FC<CartDropdownProps> = ({isOpen, toggleOpenCart}) => {
  const { emptyCart, cartItem } = useCart();

  const closeCart = useCallback(() => {
    if (isOpen) {
      toggleOpenCart();
    }
  }, [isOpen, toggleOpenCart]);

  const ref = useOutsideClick(closeCart);

  useEffect(() => {
    if (emptyCart) {
      setTimeout(() => {
        closeCart();
      }, 2000);
    }
  }, [emptyCart, closeCart]);

  return (
    <div ref={ref} className={`cartDropDown ${!isOpen ? "hidden" : ""}`}>
      <h4>Cart</h4>
      {!cartItem || emptyCart ? (
        <CartMessage
          cartMessageClass="isEmptyDiv"
          messageClass="isEmptySpan"
          message="Your cart is empty"
        />
      ) : (
        <CartItems />
      )}
    </div>
  );
};
export default CartDropdown;
