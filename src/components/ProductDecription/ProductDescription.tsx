import { useQuantity } from "../../customHooks/useQuantity";
import { sneakersDatas } from "../../datas/sneakersDatas";
import Button from "../ui/Button";

import "./ProductDescription.scss";

export const ProductDescription = () => {
  const { brand, name, description, price, discount, previousPrice } =
    sneakersDatas[0];

  const { quantity, incrementQuantity, decrementQuantity } = useQuantity();

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
        <Button buttonName="addToCart" buttonClass="productAddToCart" />
      </div>
    </div>
  );
};
