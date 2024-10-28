import { ArrowButtonProps } from "../../../../typescript/types";
import "./ArrowButton.scss";

const ArrowButton: React.FC<ArrowButtonProps> = ({ isLeftButton }) => {
  return (
    <div className={`arrowButton ${isLeftButton === true ? "leftButton" : ""}`}>
      <svg
        className="arrowSvg"
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
};
export default ArrowButton;
