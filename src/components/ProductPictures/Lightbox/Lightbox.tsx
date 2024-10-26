import { LightboxProps } from "../../../../typescript/types";
import BigPicture from "../BigPicture/BigPicture";
import './Lightbox.scss';

const Lightbox: React.FC<LightboxProps> = ({ imgBig, image, imgSmall, selectedIndex, onClose }) => {
  return (
    <div className="lightbox">
      <h1>Lightbox</h1>
      <BigPicture image={image}/>
    </div>
  );
};
export default Lightbox;
