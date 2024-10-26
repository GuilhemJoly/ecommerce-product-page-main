import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";

export const ProductPictures = () => {
  const { imgBig, imgSmall } = sneakersDatas[0];
  const [selectedImage, setSelectedImage] = useState(imgBig[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (imgBig: string, index: number) => {
    setSelectedImage(imgBig);
    setSelectedIndex(index);
  };
  return (
    <div className="productPictures">
      <img
        className="productBigPicture"
        src={selectedImage}
        alt="product big view"
      />
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
    </div>
  );
};
