import { useState } from "react";
import { sneakersDatas } from "../../datas/sneakersDatas";

import "./ProductPicture.scss";

export const ProductPictures = () => {
  const images = sneakersDatas[0].images;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };
  return (
    <div className="productPictures">
      <img className="productBigPicture" src={selectedImage} alt="product big view" />
      <div className="productSmallPictures">
        <img className={selectedIndex === 0 ? "selected" : ""} src={images[1]} alt="product view 1" onClick={() => handleThumbnailClick(images[0],0)}/>
        <img className={selectedIndex === 2 ? "selected" : ""} src={images[3]} alt="product view 2" onClick={() => handleThumbnailClick(images[2],2)}/>
        <img className={selectedIndex === 4 ? "selected" : ""} src={images[5]} alt="product view 3" onClick={() => handleThumbnailClick(images[4],4)}/>
        <img className={selectedIndex === 6 ? "selected" : ""} src={images[7]} alt="product view 4" onClick={() => handleThumbnailClick(images[6],6)}/>
      </div>
    </div>
  );
};
