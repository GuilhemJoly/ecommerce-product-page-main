import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";
import Lightbox from "./Lightbox/Lightbox";
import BigPicture from "./BigPicture/BigPicture";
import SmallPictures from "./SmallPictures/SmallPictures";

export const ProductPictures = () => {
  
  const { imgBig, imgSmall } = sneakersDatas[0];
  const [selectedImage, setSelectedImage] = useState(imgBig[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      <BigPicture image={selectedImage} onClick={handleImageClick}/>
      <SmallPictures
        imgSmall={imgSmall}
        imgBig={imgBig}
        selectedIndex={selectedIndex}
        onThumbnailClick={handleThumbnailClick}
      />
      {isLightboxOpen && (
        <Lightbox
          images={imgBig}
          initialIndex={selectedIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};
