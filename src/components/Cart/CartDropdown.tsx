import { CartDropdownProps } from "../../../typescript/types";
import Button from "../ui/Button";
import "./CartDropDown.scss";
import { useCart } from "../../customHooks/useCart";
import useOutsideClick from "../../customHooks/useClickOutsideElement";

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, toggleOpenCart}) => {

    const { emptyCart, cartItem, handleDeleteCart} = useCart();

    const name = cartItem?.[0]?.name || "";
    const price = cartItem?.[0]?.price || 0;
    const quantity = cartItem?.[0]?.quantity || 0;
    const imgProduct = cartItem?.[0]?.imgSmall[0] || "";

    const finalPrice = price * quantity;

    const ref = useOutsideClick(() => {
      if (isOpen) {
        toggleOpenCart();
      }
    });

  return (
    <div ref={ref} className={`cartDropDown ${!isOpen ? "hidden" : ""}`}>
      <h4>Cart</h4>
      {(!cartItem || emptyCart) ? (
        <div className="isEmptyDiv">
            <span className="isEmptySpan">Your cart is empty</span>
        </div>
      ) : (
        <div className="cartItems">
          <div className="cartItem">
            <img
              className="cartImg"
              src={imgProduct}
            />
            <div className="cartItemDescription">
              <span>{name}</span>
              <div className="cartPriceSection">
                <span>${price.toFixed(2)}</span>
                <span>x </span>
                <span>{quantity}</span>
                <span className="bold">${finalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="deleteIconContainer">
              <img className="deleteIcon" src="public\images\icon-delete.svg" onClick={handleDeleteCart }/>
            </div>
          </div>
          <Button buttonName="Checkout" buttonClass="cartButton" />
        </div>
      )}
    </div>
  );
};
export default CartDropdown;
