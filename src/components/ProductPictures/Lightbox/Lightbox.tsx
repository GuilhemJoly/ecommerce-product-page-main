import { LightboxProps } from "../../../../typescript/types";
import BigPicture from "../BigPicture/BigPicture";
import SmallPictures from "../SmallPictures/SmallPictures";
import "./Lightbox.scss";

const Lightbox: React.FC<LightboxProps> = ({
  imgBig,
  image,
  imgSmall,
  selectedIndex,
  onThumbnailClick,
  onClose,
}) => {
  return (
    <div className="lightbox">
      <h1>Lightbox</h1>
      <div className="BigPicturesLightBoxContainer">
        <BigPicture image={image} />
      </div>
      <div className="SmallPicturesLightBoxContainer">
        <SmallPictures
          imgSmall={imgSmall}
          imgBig={imgBig}
          selectedIndex={selectedIndex}
          onThumbnailClick={onThumbnailClick}
        />
      </div>
    </div>
  );
};
export default Lightbox;
