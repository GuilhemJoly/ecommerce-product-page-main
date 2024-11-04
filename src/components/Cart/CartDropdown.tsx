import { CartDropdownProps } from "../../../typescript/types";
import Button from "../Ui/Button";
import "./CartDropDown.scss";
import { useCart } from "../../customHooks/useCart";
import useOutsideClick from "../../customHooks/useClickOutsideElement";
import { useEffect } from "react";
import { CartItem } from "./CartItem";

const CartDropdown: React.FC<CartDropdownProps> = ({
  isOpen,
  toggleOpenCart,
}) => {
  const { emptyCart, cartItem} = useCart();



  const ref = useOutsideClick(() => {
    if (isOpen) {
      toggleOpenCart();
    }
  });

  useEffect(() => {
    if (emptyCart) {
      setTimeout(() => {
        if (isOpen) {
          toggleOpenCart();
        }
      }, 2000);
    }
  }, [emptyCart, isOpen, toggleOpenCart]);

  return (
    <div ref={ref} className={`cartDropDown ${!isOpen ? "hidden" : ""}`}>
      <h4>Cart</h4>
      {!cartItem || emptyCart ? (
        <div className="isEmptyDiv">
          <span className="isEmptySpan">Your cart is empty</span>
        </div>
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
