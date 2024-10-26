import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";
import Lightbox from "./Lightbox/Lightbox";
import BigPicture from "./BigPicture/BigPicture";

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
      <div className="productSmallPictures">
        {imgSmall.map((smallImg, index) => (
          <div
            key={index}
            className="thumbnail-container"
            onClick={() => handleThumbnailClick(imgBig[index], index)}
          >
            {selectedIndex === index && <span className="borderImg"></span>}
            <img
              className={selectedIndex === index ? "selected" : ""}
              src={smallImg}
              alt={`product view ${index + 1}`}
            />
          </div>
        ))}
      </div>
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
