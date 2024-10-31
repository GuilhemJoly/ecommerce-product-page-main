import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavDesktop.scss";

const NavDesktop = () => {
  const [isNavOpen, setIsNavOpen] = useState("hidden");

  const toggleNav = () => {
    if (window.innerWidth < 768) {
      setIsNavOpen(isNavOpen === "hidden" ? "" : "hidden");
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen("");
      } else {
        setIsNavOpen("hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={isNavOpen}>
      <img src="public/images/logo.svg" alt="logo" className="logo" />
      <div className="closeIcon" onClick={toggleNav}>
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill=""
            fillRule="evenodd"
          />
        </svg>
      </div>
      <ul>
        <li>
          <Link to={"#"}>Collections</Link>
        </li>
        <li>
          <Link to={"#"}>Men</Link>
        </li>
        <li>
          <Link to={"#"}>Women</Link>
        </li>
        <li>
          <Link to={"#"}>About</Link>
        </li>
        <li>
          <Link to={"#"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavDesktop;
