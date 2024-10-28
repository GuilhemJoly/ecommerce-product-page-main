import { CartDropdownProps } from "../../../typescript/types";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import Button from "../ui/Button";
import "./CartDropDown.scss";

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen}) => {
    const {handleGetElementFromStorage} = useLocalStorage();
    const cartItem = handleGetElementFromStorage();
    const name = cartItem?.b?.name || "Error";
    const price = cartItem?.c?.price || 0;
    const quantity = cartItem?.d?.quantity || 0;
    const imgProduct = cartItem?.e?.imgSmall[0] || "";

    const finalPrice = price * quantity;
    
  return (
    <div className={`cartDropDown ${!isOpen ? "hidden" : ""}`}>
      <h4>Cart</h4>
      {!cartItem ? (
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
              <img className="deleteIcon" src="public\images\icon-delete.svg" />
            </div>
          </div>
          <Button buttonName="Checkout" buttonClass="cartButton" />
        </div>
      )}
    </div>
  );
};
export default CartDropdown;
