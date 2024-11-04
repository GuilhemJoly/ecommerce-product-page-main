import { useCart } from "../../customHooks/useCart";

export const CartItem = () => {
    const { cartItem, handleDeleteCart } = useCart();

    const name = cartItem?.[0]?.name || "";
    const price = cartItem?.[0]?.price || 0;
    const quantity = cartItem?.[0]?.quantity || 0;
    const imgProduct = cartItem?.[0]?.imgSmall[0] || "";
  
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
