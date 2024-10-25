import { sneakersDatas } from "../../datas/sneakersDatas";

import './ProductDescription.scss';

export const ProductDescription = () => {
    const { brand, name, description, price, discount, previousPrice } = sneakersDatas[0];
    return (
        <div className="productDescription">
            <h2 className="productBrand">{brand}</h2>
            <h1 className="prductName">{name}</h1>
            <p className="productParagraphDescription">{description}</p>
            <div className="productPriceElements">
                <span className="productPrice">{price}</span>
                <span className="productDiscount">{discount}</span>
                <span className="productPreviousPrice">{previousPrice}</span>
            </div>
        </div>
    );
};