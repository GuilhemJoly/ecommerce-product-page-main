import { CartDropdownProps } from "../../../typescript/types";
import Button from "../ui/Button";
import "./CartDropDown.scss";

const CartDropdown: React.FC<CartDropdownProps> = ( {isOpen} ) => {
  return (
    <div className={`cartDropDown ${ !isOpen ? "hidden" : ""}`}>
      <h4>Cart</h4>
      <div className="cartItems">
        <div className="cartItem">
          <img className="cartImg" src="public/images/fall-limited-edition-sneakers/image-product-1-thumbnail.jpg" />
          <div className="cartItemDescription">
            <span>Fall Limited Edition Sneakers</span>
            <div className="cartPriceSection">
              <span>$125.00</span>
              <span>x{" "}</span>
              <span>3</span>
              <span className="bold">$375.00</span>
            </div>
          </div>
            <div className="deleteIconContainer">
                <img className="deleteIcon" src="public\images\icon-delete.svg"/>
            </div>
        </div>
        <Button buttonName="Checkout" buttonClass="cartButton" />
      </div>
    </div>
  );
};
export default CartDropdown;
