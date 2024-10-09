import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Experience = () => {
  return (
    <div className="experience-container">
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
          <div className="timeline-item left">
            <div>Ensino Médio</div>
            <div>Ano de finalizacao do Ensino Médio</div>
          </div>
          <div className="timeline-item center">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="timeline-center-icon"
            />
          </div>
          <div className="timeline-item right">
            <div>2017</div>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-item right">
            <div>Inicio UERJ</div>
            <div>Ano de INICIO do Ensino Médio</div>
          </div>
          <div className="timeline-item center">
            <FontAwesomeIcon
              icon={faBuilding}
              className="timeline-center-icon"
            />
          </div>
          <div className="timeline-item left">
            <div>2018</div>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-item left">
            <div>Inicio do estágio</div>
            <div>Ano de INICIO do Ensino Médio</div>
          </div>
          <div className="timeline-item center">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="timeline-center-icon"
            />
          </div>
          <div className="timeline-item right">
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
  );
};

export default Experience;
