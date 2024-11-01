import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPictures.scss";
import Lightbox from "./Lightbox/Lightbox";
import BigPicture from "./BigPicture/BigPicture";
import SmallPictures from "./SmallPictures/SmallPictures";

export const ProductPictures = () => {
  const { imgBig, imgSmall } = sneakersDatas[0];
  const [selectedImage, setSelectedImage] = useState(imgBig[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const staticImg = [
    sneakersDatas[0].imgBig[0],
    sneakersDatas[0].imgBig[0],
    sneakersDatas[0].imgBig[0],
    sneakersDatas[0].imgBig[0],
  ];

  const handleThumbnailClick = (imgBig: string, index: number) => {
    setSelectedImage(imgBig);
    setSelectedIndex(index);
  };
  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };
  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="productPictures">
      <BigPicture
        image={selectedImage}
        onClick={handleImageClick}
        imgBig={staticImg}
        isLightboxOpen={isLightboxOpen}
      />
      <SmallPictures
        imgSmall={imgSmall}
        imgBig={imgBig}
        selectedIndex={selectedIndex}
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
