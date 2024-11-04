import { CartItemProps } from "../../../typescript/types";
import { useCart } from "../../customHooks/useCart";

export const CartItem: React.FC<CartItemProps>  = ({ item }) => {
    const { handleDeleteCart } = useCart();

    const { name, price, quantity, imgSmall } = item;
    const imgProduct = imgSmall[0] || "";  
    const finalPrice = price * quantity;

  return (
    <div className="cartItem">
      <img className="cartImg" src={imgProduct} />
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
        <img
          className="deleteIcon"
          src="public\images\icon-delete.svg"
          onClick={handleDeleteCart}
        />
      </div>
    </div>
  );
};
