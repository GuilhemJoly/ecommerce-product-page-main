import { BigPictureProps } from '../../../../typescript/types';
import { useImageNavigation } from '../../../customHooks/useImageNavigation';
import ArrowButton from '../../ui/ArrowButton';
import './BigPicture.scss';

const BigPicture: React.FC<BigPictureProps> = ({ image, onClick, imgBig, isLightboxOpen }) => {
    const {handlePrevClick, handleNextClick, currentIndex} = useImageNavigation();
    return (
        <div className="bigPicture">
        <img
            className="productBigPicture"
            src={`${isLightboxOpen ? imgBig[currentIndex] : image}`}
            alt="product big view"
            onClick={onClick}
        />
        <div className="arrowButtonSection">
        <ArrowButton isLeftButton={true} imgChange={handlePrevClick} />
        <ArrowButton isLeftButton={false} imgChange={handleNextClick} />
        </div>
        </div>
    );
}

export default BigPicture;