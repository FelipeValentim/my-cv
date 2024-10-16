import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import project3 from "../assets/project3.png";
import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Importação do slider

const projectData = [
  {
    profileImage:
      "https://avatars.githubusercontent.com/u/47799813?s=400&u=ec82ccf6cde46b09b031dd78a9820cf30f0c2500&v=4",
    profileName: "Felipe Valentim",
    githubUrl: "https://github.com/FelipeValentim/ac-fuzzy",
    projectImage: project1,
    title: "Controle de Ar-Condicionado Fuzzy",
    tags: ["react", "es6fuzzy", "chartjs"],
  },
  {
    profileImage:
      "https://avatars.githubusercontent.com/u/47799813?s=400&u=ec82ccf6cde46b09b031dd78a9820cf30f0c2500&v=4",
    profileName: "Felipe Valentim",
    githubUrl: "https://github.com/FelipeValentim/webmail",
    projectImage: project2,
    title: "Webmail com integração de IA",
    tags: ["react", "dotnet6", "redux", "mailkit"],
  },
  {
    profileImage:
      "https://avatars.githubusercontent.com/u/47799813?s=400&u=ec82ccf6cde46b09b031dd78a9820cf30f0c2500&v=4",
    profileName: "Felipe Valentim",
    githubUrl: "https://github.com/FelipeValentim/InviScan",
    projectImage: project3,
    title: "Gerenciador de Eventos com QRCode",
    tags: ["react-native", "dotnet6", "sql server"],
  },
];

const Projects = () => {
  // Configuração para o slider
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1030, // Quando a largura for menor que 1030px, use carousel
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1, // Mostrar apenas 1 item
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="section-title">Meus Projetos</h1>
        {/* Adicionando o Slider */}
        <Slider {...settings} className="projects-list">
          {projectData.map((project, index) => (
            <div className="instagram-container" key={index}>
              <div className="instagram-header">
                <div className="profile-image">
                  <img
                    onClick={() =>
                      window.open("https://github.com/FelipeValentim", "_blank")
                    }
                    src={project.profileImage}
                    alt=""
                  />
                </div>
                <span
                  className="profile-name"
                  onClick={() =>
                    window.open("https://github.com/FelipeValentim", "_blank")
                  }
                >
                  {project.profileName}
                </span>
              </div>
              <div className="instagram-body">
                <img src={project.projectImage} alt={project.title} />
                <FontAwesomeIcon
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  className="github"
                  icon={faGithub}
                  fontSize={40}
                />
              </div>
              <div className="instagram-footer">
                <div className="instagram-actions">
                  <div>
                    <FontAwesomeIcon icon={faHeart} fontSize={28} />
                    <FontAwesomeIcon icon={faComment} fontSize={28} />
                    <FontAwesomeIcon icon={faPaperPlane} fontSize={28} />
                  </div>
                  <FontAwesomeIcon icon={faBookmark} fontSize={28} />
                </div>
                <div>{project.title}</div>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>#{tag} </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
