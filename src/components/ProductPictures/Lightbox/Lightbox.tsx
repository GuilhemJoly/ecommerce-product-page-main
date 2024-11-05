import { LightboxProps } from "@typescript/types.ts";
import { useImageNavigation } from "@customHooks/useImageNavigation";
import LargePicture from "../LargePicture/LargePicture";
import SmallPictures from "../SmallPictures/SmallPictures";
import ArrowButton from "@ui/ArrowButton";
import "./Lightbox.scss";

const Lightbox: React.FC<LightboxProps> = ({ imgBig, imgSmall, onClose }) => {
  const { currentIndex, handlePrevClick, handleNextClick, setImgIndex } =
    useImageNavigation();

  return (
    <div className="lightbox">
      <div className="lbElementContainer">
        <div className="containerLbCloseIcon">
          <svg
            className="lbCloseIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={onClose}
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="BigPicturesLightBoxContainer">
          <LargePicture imgBig={imgBig} />
          <ArrowButton isLeftButton={true} imgChange={handlePrevClick} />
          <ArrowButton isLeftButton={false} imgChange={handleNextClick} />
        </div>
        <div className="SmallPicturesLightBoxContainer">
          <SmallPictures
            imgSmall={imgSmall}
            selectedIndex={currentIndex}
            sizeClass="lightboxSmallImgSize"
            onThumbnailClick={(index: number) => setImgIndex(index)}
          />
        </div>
      </div>
    </div>
  );
};
export default Lightbox;
