import { SmallPicturesProps } from "../../../../typescript/types";
import './SmallPictures.scss';

const SmallPictures: React.FC<SmallPicturesProps> = ({
  imgSmall,
  imgBig,
  selectedIndex,
  onThumbnailClick,
}) => {
  return (
    <div className="productSmallPictures">
      {imgSmall.map((smallImg: string, index: number) => (
        <div
          key={index}
          className="thumbnail-container"
          onClick={() => onThumbnailClick(imgBig[index], index)}
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
  );
};
export default SmallPictures;
