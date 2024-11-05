import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "@customHooks/useWindowSize";
import { navLinkDatas } from "@datas/navLinkDatas";
import "./Nav.scss";

const NavDesktop = () => {
  const { width } = useWindowSize();
  const [isNavOpen, setIsNavOpen] = useState("");

  const toggleNav = () => {
    if (width <= 768) {
      setIsNavOpen(isNavOpen === "hidden" ? "" : "hidden");
    }
  };

  useEffect(() => {
    if (width > 768) {
      setIsNavOpen("");
    } else {
      setIsNavOpen("hidden");
    }
  }, [width]);

  return (
    <>
      <nav>
        <img src="images/logo/logo.svg" alt="logo" className="logo" />
        <div className="closeIcon" onClick={toggleNav}>
          {isNavOpen === "hidden" ? (
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fixed"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill=""
                fillRule="evenodd"
              />
            </svg>
          )}
        </div>
        <ul className={isNavOpen}>
          {navLinkDatas.map((navLink, index) => (
            <li key={index}>
              <Link to={navLink.link}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isNavOpen === "hidden" ? "" : <div className="greyBackground"></div>}
    </>
  );
};
export default NavDesktop;
