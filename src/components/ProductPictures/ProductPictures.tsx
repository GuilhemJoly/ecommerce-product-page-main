import { useState } from "react";
import useWindowSize from "../../customHooks/useWindowSize";
import { sneakersDatas } from "../../datas/sneakersDatas";
import Lightbox from "./Lightbox/Lightbox";
import LargePicture from "./LargePicture/LargePicture";
import SmallPictures from "./SmallPictures/SmallPictures";
import "./ProductPictures.scss";

export const ProductPictures = () => {
  const { imgBig, imgSmall } = sneakersDatas[0];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  //* staticImg is used to store the selected image in the page when the lightbox is open
  const staticImg = Array(imgBig.length).fill(
    sneakersDatas[0].imgBig[selectedIndex]
  );

  const handleThumbnailClick = ( index: number) => {
    setSelectedIndex(index);
  };
  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };
  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };
  const { width } = useWindowSize();

  return (
    <div className="productPictures">
      <LargePicture
        onClick={handleImageClick}
        imgBig={width > 768 ? staticImg : imgBig}
      />
      <SmallPictures
        imgSmall={imgSmall}
        selectedIndex={selectedIndex}
        sizeClass="pageImgSize"
        onThumbnailClick={handleThumbnailClick}
      />
      {isLightboxOpen && width > 768 && (
        <Lightbox
          imgSmall={imgSmall}
          imgBig={imgBig}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};
