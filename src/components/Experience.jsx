import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.css";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <h1 className="section-title">Minhas Experiencias</h1>
        {/* <div className="experience-timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Formatura do Ensino Médio</h3>
            <p>Ano em que finalizei os estudos do ensino médio</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Início na UERJ</h3>
            <p>Comecei os outros na UERJ</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Estágio Fullstack</h3>
            <p>Comecei o estágio de desenvolvedor fullstack</p>
          </div>
        </div>
      </div> */}
        <div className="timeline-container">
          <div className="timeline-row">
            <div className="timeline-item timeline-content left">
              <div className="title">Término do Ensino Médio</div>
              <div className="subtitle">
                Ano de finalizacao do Ensino Médio - Albert Sabin
              </div>
              <div className="skills">Matemática, Física, Inglês</div>
            </div>
            <div className="timeline-item center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="timeline-center-icon"
              />
            </div>
            <div className="timeline-item time right">
              <div>2017</div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-item timeline-content right">
              <div className="title">Início da Faculdade</div>
              <div className="subtitle">Ciencia da Computacao - UERJ</div>
              <div className="skills">
                Métodos de Busca, Estrutura de Dados, Teste de Software
              </div>
            </div>
            <div className="timeline-item center">
              <FontAwesomeIcon
                icon={faBuilding}
                className="timeline-center-icon"
              />
            </div>
            <div className="timeline-item time left">
              <div>2018</div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-item timeline-content left">
              <div className="title">Início do Estágio</div>
              <div className="subtitle">
                Desenvolvedor FullStack - Practice Software LTDA
              </div>
              <div className="skills">
                React, .NET, Javascript, JQuery, ASP.NET, SQL Server
              </div>
            </div>
            <div className="timeline-item center">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="timeline-center-icon"
              />
            </div>
            <div className="timeline-item time right">
              <div>2022</div>
            </div>
          </div>
        </div>

        {/* <ul className="timeline">
        <li className="timeline-item" style={{ "--accent-color": "#41516C" }}>
          <div className="date">2017</div>
          <div className="title">Ensino Médio</div>
          <div className="descr">Ano de finalizacao do Ensino Médio</div>
        </li>
        <li className="timeline-item" style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">2007</div>
          <div className="title">Title 2</div>
          <div className="descr">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            adipisci nobis nostrum vero nihil veniam.
          </div>
        </li>
        <li className="timeline-item" style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2012</div>
          <div className="title">Title 3</div>
          <div className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
            consequuntur soluta placeat iure totam commodi repellendus ea
            delectus, libero fugit quod reprehenderit, sequi quo, et dolorum
            saepe nulla hic.
          </div>
        </li>
      </ul> */}
      </div>
    </section>
  );
};

export default Experience;
