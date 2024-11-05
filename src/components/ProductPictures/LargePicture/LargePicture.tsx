import { LargePictureProps } from "../../../../typescript/types";
import { useImageNavigation } from "../../../customHooks/useImageNavigation";
import ArrowButton from "../../Ui/ArrowButton.tsx";
import "./LargePicture.scss";

const LargePicture: React.FC<LargePictureProps> = ({ onClick, imgBig }) => {
  const { handlePrevClick, handleNextClick, currentIndex } =
    useImageNavigation();
  return (
    <div className="largePicture">
      <img
        className="productLargePicture"
        src={imgBig[currentIndex]}
        alt="product large view"
        onClick={onClick}
      />
      <div className="arrowButtonSection">
        <ArrowButton isLeftButton={true} imgChange={handlePrevClick} />
        <ArrowButton isLeftButton={false} imgChange={handleNextClick} />
      </div>
    </div>
  );
};

export default LargePicture;
