import { CartDropdownProps } from "../../../typescript/types";
import Button from "../Ui/Button";
import "./CartDropDown.scss";
import { useCart } from "../../customHooks/useCart";
import useOutsideClick from "../../customHooks/useClickOutsideElement";
import { useCallback, useEffect } from "react";
import { CartItem } from "./CartItem";
import { CartMessage } from "./CartMessage";

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
        <div className="cartItems">
          <CartItem />
          <Button buttonName="Checkout" buttonClass="cartButton" />
        </div>
      )}
    </div>
  );
};
export default CartDropdown;
