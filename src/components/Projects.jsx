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
import { useEffect } from "react";

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
  /*
  useEffect(() => {
    const instagramContainers = document.querySelectorAll(
      ".instagram-container"
    );

    instagramContainers.forEach((container) => {
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) * -0.1;
        const rotateY = (x - rect.width / 2) * 0.1;
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)  scale3d(1, 1, 1)`;
      };

      const handleMouseLeave = () => {
        container.style.transform =
          "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);
  */

  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="section-title">Meus Projetos</h1>
        <div className="projects-list">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
