import { ArrowButtonProps } from "../../../typescript/types";
import useWindowSize from "../../customHooks/useWindowSize";
import "./ArrowButton.scss";

const ArrowButton: React.FC<ArrowButtonProps> = ({
  isLeftButton,
  imgChange,
}) => {
  const { width } = useWindowSize();
  return (
    <div
      onClick={imgChange}
      className={`arrowButton ${isLeftButton === true ? "leftButton" : ""}`}
    >
      <svg
        className="arrowSvg"
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={width >= 768 ? "M2 1 L10 9 L2 17" : "M2 3 L8 8.5 L2 14"}
          stroke-width="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
export default ArrowButton;
