import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import closeTag from "../assets/close-tag.svg";
import openTag from "../assets/open-tag.svg";
import "./Header.css";
import {
  faBars,
  faBrain,
  faFire,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Função para rolar para uma seção específica
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;

      // Calcula a nova posição, subtraindo 250px
      const offsetPosition = elementPosition + 250;

      // Rola até a nova posição com comportamento suave
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  // Função para verificar qual seção está ativa com base na rolagem
  const handleScroll = () => {
    const sections = ["home", "experience", "skills", "projects"];
    let currentSection = "home"; // Padrão para a primeira seção

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  };

  // Adiciona event listener para rolagem
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <span
              className={`navigator ${
                activeSection === "home" ? "active" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Início
            </span>
            <span
              className={`navigator ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => scrollToSection("experience")}
            >
              Experiência
            </span>
            <span
              className={`navigator ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              Habilidade
            </span>
            <span
              className={`navigator ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={() => scrollToSection("projects")}
            >
              Projetos
            </span>
          </nav>
        </header>
        <div className="mobile-header">
          <div className="mobile-menu" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="mobile-container">
            <div
              className={`navigator ${
                activeSection === "home" ? "active" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              <FontAwesomeIcon fontSize={40} icon={faHome} />
              <span>Início</span>
            </div>
            <div
              className={`navigator ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => scrollToSection("experience")}
            >
              <FontAwesomeIcon fontSize={40} icon={faFire} />

              <span>Experiência</span>
            </div>
            <div
              className={`navigator ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              <FontAwesomeIcon fontSize={40} icon={faBrain} />

              <span>Habilidade</span>
            </div>
            <div
              className={`navigator ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={() => scrollToSection("projects")}
            >
              <FontAwesomeIcon fontSize={40} icon={faProjectDiagram} />
              <span>Projetos</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
