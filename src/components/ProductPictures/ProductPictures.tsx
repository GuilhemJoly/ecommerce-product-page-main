import { sneakersDatas } from "../../datas/sneakersDatas";

export const ProductPictures = () => {
    const images = sneakersDatas[0].images;
    return (
        <div>
            <img src={images[0]} alt="product big view" />
            <img src={images[1]} alt="product view 1" />
            <img src={images[3]} alt="product view 2" /> 
            <img src={images[5]} alt="product view 3" />
            <img src={images[7]} alt="product view 4" />
        </div>
    );
}