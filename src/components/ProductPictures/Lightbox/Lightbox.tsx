import { LightboxProps } from "../../../../typescript/types";
import BigPicture from "../BigPicture/BigPicture";
import SmallPictures from "../SmallPictures/SmallPictures";
import "./Lightbox.scss";

const Lightbox: React.FC<LightboxProps> = ({
  imgBig,
  image,
  imgSmall,
  selectedIndex,
  onClose,
}) => {
  return (
    <div className="lightbox">
      <h1>Lightbox</h1>
      <BigPicture image={image} />
      <div className="SmallPicturesLightBoxContainer">
        <SmallPictures
          imgSmall={imgSmall}
          imgBig={imgBig}
          selectedIndex={selectedIndex}
          onThumbnailClick={() => {}}
        />
      </div>
    </div>
  );
};
export default Lightbox;
