import { useQuantity } from "../../customHooks/useQuantity";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import { sneakersDatas } from "../../datas/sneakersDatas";
import { useCart } from "../../customHooks/useCart";
import Button from "../Ui/Button.tsx";

import "./ProductDescription.scss";

export const ProductDescription = () => {
  const { brand, name, description, price, discount, previousPrice, imgSmall } =
    sneakersDatas[0];

  const { quantity, incrementQuantity, decrementQuantity, resetQuantity } =
    useQuantity();
  const { setCartItem, setEmptyCart } = useCart();
  const { handleSubmitToStorage } = useLocalStorage();

  const a = { brand };
  const b = { name };
  const c = { price };
  const d = { quantity };
  const e = { imgSmall };

  const handleSubmit = () => {
    if (quantity === 0) return;
    const elements = JSON.stringify({ a, b, c, d, e });
    handleSubmitToStorage({ elements });
    resetQuantity();
    setCartItem([{ brand, name, price, quantity, imgSmall }]);
    setEmptyCart(false);
  };

  return (
    <div className="productDescription">
      <h2 className="productBrand">{brand}</h2>
      <h1 className="productName">{name}</h1>
      <p className="productParagraphDescription">{description}</p>
      <div className="productPriceElements">
        <div className="productPriceAndDiscount">
          <span className="productPrice">{"$" + price.toFixed(2)}</span>
          <span className="productDiscount">{discount + "%"}</span>
        </div>
        <span className="productPreviousPrice">
          {"$" + previousPrice.toFixed(2)}
        </span>
      </div>
      <div className="addToCartSection">
        <div className="productQuantity">
          <button
            className="quantityButton streched"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span className="quantityNumber">{quantity}</span>
          <button className="quantityButton" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <Button
          buttonName="Add to cart"
          buttonClass="productAddToCart"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
