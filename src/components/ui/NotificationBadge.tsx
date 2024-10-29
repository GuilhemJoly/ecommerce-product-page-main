import { useCart } from "../../customHooks/useCart";
import "./NotificationBadge.scss";

const NotificationBadge = () => {
  const { cartItem } = useCart();
  return (
    <>
      {cartItem.length > 0 && cartItem?.[0]?.quantity > 0 ? (
        <div className="notificationBadge">{cartItem?.[0]?.quantity}</div>
      ) : (
        ""
      )}
    </>
  );
};
export default NotificationBadge;
