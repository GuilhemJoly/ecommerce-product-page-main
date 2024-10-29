import { useEffect, useState } from "react";
import { CartDropdownProps } from "../../../typescript/types";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import Button from "../ui/Button";
import "./CartDropDown.scss";
import { useCart } from "../../customHooks/useCart";

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen}) => {
    const [emptyCart, setEmptyCart] = useState(false);
    
    const {handleRemoveFromStorage, handleGetElementFromStorage} = useLocalStorage();
    const { cartItem, setCartItem} = useCart();

    const name = cartItem?.[0]?.name || "";
    const price = cartItem?.[0]?.price || 0;
    const quantity = cartItem?.[0]?.quantity || 0;
    const imgProduct = cartItem?.[0]?.imgSmall[0] || "";

    const finalPrice = price * quantity;

    useEffect(() => {
      const storageItem = handleGetElementFromStorage();
      if (storageItem) {
        const cartElements = {
          brand: storageItem?.a?.brand || "",
          name: storageItem?.b?.name || "",
          price: storageItem?.c?.price || 0,
          quantity: storageItem?.d?.quantity || 0,
          imgSmall: storageItem?.e?.imgSmall || [""],
        };
  
        if (cartItem.length > 0) {
          setEmptyCart(false);
          console.log("cartItem", cartItem);
        } else if (storageItem) {
          console.log("local storage", cartElements);
          setCartItem([cartElements]);
          setEmptyCart(false);
        } else {
          setEmptyCart(true);
          console.log("empty");
        }
      }
    }, [cartItem, handleGetElementFromStorage, setCartItem, setEmptyCart]);

    const handleDeleteCart = () => {
        handleRemoveFromStorage();
        setEmptyCart(true);
        setCartItem([]);
    };
    
  return (
    <div className={`cartDropDown ${!isOpen ? "hidden" : ""}`}>
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
