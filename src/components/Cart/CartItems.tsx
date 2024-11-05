import { useCart } from "@customHooks/useCart";
import { CartItem } from "./CartItem";
import Button from "@ui/Button";
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
