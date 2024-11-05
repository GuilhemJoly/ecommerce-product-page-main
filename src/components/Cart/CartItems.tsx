import { useCart } from "../../customHooks/useCart";
import Button from "../Ui/Button.tsx";
import { CartItem } from "./CartItem";
import "./styles/CartItems.scss";

export const CartItems = () => {
  const { cartItem } = useCart();
  return (
    <div className="cartItems">
      {cartItem.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <Button buttonName="Checkout" buttonClass="cartButton" />
    </div>
  );
};
