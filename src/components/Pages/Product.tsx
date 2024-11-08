import { ProductPictures } from "../ProductPictures/ProductPictures";
import { ProductDescription } from "../ProductDecription/ProductDescription";
import './styles/Product.scss';

const Product = () => {

    return (
        <div className="productPage">
            <ProductPictures/>
            <ProductDescription/>
        </div>
    );
};

export default Product;