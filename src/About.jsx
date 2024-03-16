import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import programming from "/programming.svg";
import "./About.css";

import {
  faCode,
  faDatabase,
  faDownload,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faFacebook);

const About = () => {
  return (
    <div className="about fade">
      <div className="programming-image">
        <img src={programming} />
      </div>
      <div className="skills">
        <h1>Sobre mim</h1>
        <p>
          Olá, sou um desenvolvedor Full-Stack. Tenho experiência com tanto com
          desenvolvimento backend, quanto em frontend. Sou bom em
        </p>
        <ul className="competences">
          <li>html</li>
          <li>css</li>
          <li>.net</li>
          <li>javascript</li>
          <li>react</li>
          <li>jquery</li>
          <li>c-sharp</li>
          <li>typescript</li>
          <li>xamarin</li>
        </ul>
        <div
          className="download-cv"
          onClick={() =>
            window.open(
              "https://drive.usercontent.google.com/u/0/uc?id=1lVgBm80sTnW4R-DODmtW64FgwJCKhFkT&export=download",
              "_blank"
            )
          }
        >
          Baixar Currículo &nbsp;&nbsp;
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
      <div className="services">
        <h1>O que eu faço</h1>
        <div className="services-items">
          <div className="service-item web">
            <h2 className="service-title">
              <FontAwesomeIcon icon={faCode} />
              &nbsp; Desenvolvimento Web
            </h2>
            <br />
            <p className="service-text">
              Sou um desenvolvedor web com experiência em .NET. Trabalho com
              ASP.NET, C#, MVC, Entity Framework e React. Meu foco é criar
              soluções web eficientes e escaláveis. Busco oportunidades para
              aplicar minhas habilidades em projetos desafiadores e inovadores.
            </p>
          </div>
          <div className="service-item mobile">
            <h2 className="service-title">
              <FontAwesomeIcon icon={faMobile} />
              &nbsp; Desenvolvimento Mobile
            </h2>
            <br />
            <p className="service-text">
              Sou um desenvolvedor mobile com experiência em Xamarin. Trabalho
              com C# para criar aplicativos nativos para Android e iOS. Busco
              oportunidades para aplicar minha experiência em desenvolvimento
              mobile em projetos inovadores e desafiadores.
            </p>
          </div>
          <div className="service-item database">
            <h2 className="service-title">
              <FontAwesomeIcon icon={faDatabase} />
              &nbsp; SQL Server
            </h2>
            <br />
            <p className="service-text">
              Tenho experiência em gerenciamento de Banco de Dados SQL Server.
              Trabalho com modelagem, consultas e otimização de desempenho.
              Busco oportunidades para aplicar minha experiência em projetos que
              exijam um sólido conhecimento em SQL Server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
