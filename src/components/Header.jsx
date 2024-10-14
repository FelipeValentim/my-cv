import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import closeTag from "../assets/close-tag.svg";
import openTag from "../assets/open-tag.svg";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? "header-container active" : "header-container"}>
        <header className="header">
          <div className="tag">
            <img className="open-tag" src={openTag} />
            <span className="name-tag">FelipeValentimDaSilva</span>
            <img className="close-tag" src={closeTag} />
          </div>
          <nav className="navigation">
            <span className="navigator">Início</span>
            <span className="navigator">Experiência</span>
            <span className="navigator">Habilidade</span>
            <span className="navigator">Projetos</span>
            <span className="navigator">Contato</span>
          </nav>
        </header>
        <div className="mobile-header">
          <div className="mobile-menu" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="mobile-container"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
