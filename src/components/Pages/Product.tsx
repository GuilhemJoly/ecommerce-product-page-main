import { sneakersDatas } from "../../datas/sneakersDatas";

const Product = () => {
    const { brand, name, description, price, discount, previousPrice } = sneakersDatas[0];

    return (
        <div>
            <h2>{brand}</h2>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
                <span>{price}</span>
                <span>{discount}</span>
                <span>{previousPrice}</span>
            </div>
        </div>
    );
};

export default Product;