import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";

export const ProductPictures = () => {
  const imgBig = sneakersDatas[0].imgBig;
  const imgSmall = sneakersDatas[0].imgSmall;
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
        <div
          className="thumbnail-container"
          onClick={() => handleThumbnailClick(imgBig[0], 0)}
        >
          {selectedIndex === 0 && <span className="borderImg"></span>}
          <img
            className={selectedIndex === 0 ? "selected" : ""}
            src={imgSmall[0]}
            alt="product view 1"
          />
        </div>
        <div
          className="thumbnail-container"
          onClick={() => handleThumbnailClick(imgBig[1], 1)}
        >
          {selectedIndex === 1 && <span className="borderImg"></span>}
          <img
            className={selectedIndex === 1 ? "selected" : ""}
            src={imgSmall[1]}
            alt="product view 2"
          />
        </div>
        <div
          className="thumbnail-container"
          onClick={() => handleThumbnailClick(imgBig[2], 2)}
        >
          {selectedIndex === 2 && <span className="borderImg"></span>}
          <img
            className={selectedIndex === 2 ? "selected" : ""}
            src={imgSmall[2]}
            alt="product view 3"
          />
        </div>
        <div
          className="thumbnail-container"
          onClick={() => handleThumbnailClick(imgBig[3], 3)}
        >
          {selectedIndex === 3 && <span className="borderImg"></span>}
          <img
            className={selectedIndex === 3 ? "selected" : ""}
            src={imgSmall[3]}
            alt="product view 4"
          />
        </div>
      </div>
    </div>
  );
};
