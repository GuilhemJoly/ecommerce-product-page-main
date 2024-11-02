import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPictures.scss";
import Lightbox from "./Lightbox/Lightbox";
import BigPicture from "./BigPicture/BigPicture";
import SmallPictures from "./SmallPictures/SmallPictures";
import useWindowSize from "../../customHooks/useWindowSize";

export const ProductPictures = () => {
  const { imgBig, imgSmall } = sneakersDatas[0];
  // const [selectedImage, setSelectedImage] = useState(imgBig[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  //* staticImg is used to store the selected image in the page when the lightbox is open
  const staticImg = Array(imgBig.length).fill(sneakersDatas[0].imgBig[selectedIndex]);

  const handleThumbnailClick = (imgBig: string, index: number) => {
    // setSelectedImage(imgBig);
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
      <BigPicture   
        onClick={handleImageClick}
        imgBig={width > 768 ? staticImg : imgBig}
      />
      <SmallPictures
        imgSmall={imgSmall}
        imgBig={imgBig}
        selectedIndex={selectedIndex}
        sizeClass="pageImgSize"
        onThumbnailClick={handleThumbnailClick}
      />
      {isLightboxOpen && (
        <Lightbox
          imgSmall={imgSmall}
          imgBig={imgBig}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};
