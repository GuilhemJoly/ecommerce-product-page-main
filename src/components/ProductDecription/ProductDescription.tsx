import { sneakersDatas } from "../../datas/sneakersDatas";

export const ProductDescription = () => {
    const { brand, name, description, price, discount, previousPrice } = sneakersDatas[0];
    return (
        <div>
            <h2 className="productBrand">{brand}</h2>
            <h1 className="prductName">{name}</h1>
            <p className="productDescription">{description}</p>
            <div className="productPriceElements">
                <span className="productPrice">{price}</span>
                <span className="productDiscount">{discount}</span>
                <span className="productPreviousPrice">{previousPrice}</span>
            </div>
        </div>
    );
};