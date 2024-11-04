import { BigPictureProps } from "../../../../typescript/types";
import { useImageNavigation } from "../../../customHooks/useImageNavigation";
import ArrowButton from "../../Ui/ArrowButton";
import "./BigPicture.scss";

const BigPicture: React.FC<BigPictureProps> = ({ onClick, imgBig }) => {
  const { handlePrevClick, handleNextClick, currentIndex } =
    useImageNavigation();
  return (
    <div className="bigPicture">
      <img
        className="productBigPicture"
        src={imgBig[currentIndex]}
        alt="product big view"
        onClick={onClick}
      />
      <div className="arrowButtonSection">
        <ArrowButton isLeftButton={true} imgChange={handlePrevClick} />
        <ArrowButton isLeftButton={false} imgChange={handleNextClick} />
      </div>
    </div>
  );
};

export default BigPicture;
