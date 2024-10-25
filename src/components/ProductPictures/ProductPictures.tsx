import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";

export const ProductPictures = () => {
  const images = sneakersDatas[0].images;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div className="productPictures">
      <img className="productBigPicture" src={selectedImage} alt="product big view" />
      <div className="productSmallPictures">
        <img src={images[1]} alt="product view 1" onClick={() => handleThumbnailClick(images[0])}/>
        <img src={images[3]} alt="product view 2" onClick={() => handleThumbnailClick(images[2])}/>
        <img src={images[5]} alt="product view 3" onClick={() => handleThumbnailClick(images[4])}/>
        <img src={images[7]} alt="product view 4" onClick={() => handleThumbnailClick(images[6])}/>
      </div>
    </div>
  );
};
