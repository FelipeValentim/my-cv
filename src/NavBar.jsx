import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faHome,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ page, setPage, isMobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={isMobile ? "nav-bar mobile" : "nav-bar"}>
      <div className="nav-bar-wrapper">
        {isMobile && (
          <ul className="menu-button" onClick={() => setOpen(!open)}>
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </ul>
        )}

        <div className={open ? "menu open" : "menu"}>
          <ul className="options">
            <li onClick={() => setPage(1)}>
              <FontAwesomeIcon icon={faHome} />
            </li>
            <li onClick={() => setPage(2)}>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li onClick={() => setPage(3)}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </li>
            <li onClick={() => setPage(4)}>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </ul>

          <ul className="previous-next">
            <li
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            <li
              onClick={() => {
                if (page < 4) setPage(page + 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
