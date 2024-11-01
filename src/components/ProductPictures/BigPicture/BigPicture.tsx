import { BigPictureProps } from '../../../../typescript/types';
import { useImageNavigation } from '../../../customHooks/useImageNavigation';
import ArrowButton from '../../ui/ArrowButton';
import './BigPicture.scss';

const BigPicture: React.FC<BigPictureProps> = ({ image, onClick }) => {
    const {handlePrevClick, handleNextClick } = useImageNavigation();
    return (
        <div className="bigPicture">
        <img
            className="productBigPicture"
            src={image}
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