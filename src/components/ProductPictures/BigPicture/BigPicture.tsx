import './BigPicture.scss';
import { BigPictureProps } from '../../../../typescript/types';


const BigPicture: React.FC<BigPictureProps> = ({ image, onClick }) => {
    return (
        <img
            className="productBigPicture"
            src={image}
            alt="product big view"
            onClick={onClick}
        />
    );
}

export default BigPicture;