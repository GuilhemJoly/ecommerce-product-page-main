import { SmallPicturesProps } from "@typescript/types";
import "./SmallPictures.scss";

const SmallPictures: React.FC<SmallPicturesProps> = ({
  imgSmall,
  selectedIndex,
  sizeClass,
  onThumbnailClick,
}) => {
  return (
    <div className="productSmallPictures">
      {imgSmall.map((smallImg, index) => (
        <div
          key={index}
          className="thumbnail-container"
          onClick={() => onThumbnailClick(index)}
        >
          <span
            className={`borderImg ${
              selectedIndex === index ? "selected" : ""
            } ${sizeClass}`}
          ></span>
          <img
            className={`${
              selectedIndex === index ? "selected" : ""
            } ${sizeClass}`}
            src={smallImg}
            alt={`product view ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
export default SmallPictures;
