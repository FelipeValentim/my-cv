import React from "react";
import closeTag from "../assets/close-tag.svg";
import openTag from "../assets/open-tag.svg";
import "./Header.css";

const Header = () => {
  return (
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
        <span className="navigator">Contato</span>
      </nav>
    </header>
  );
};

export default Header;
