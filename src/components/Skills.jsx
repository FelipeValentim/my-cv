import "./Skills.css";
import reactSvg from "../assets/react.svg";
import javascriptSvg from "../assets/javascript.svg";
import sqlServerSvg from "../assets/sql-server.svg";
import typescriptSvg from "../assets/typescript.svg";
import xamarinSvg from "../assets/xamarin.svg";
import htmlSvg from "../assets/html.svg";
import cssSvg from "../assets/css.svg";
import dotnetSvg from "../assets/dotnet.svg";
import { useEffect, useState } from "react";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("react");
  const [isAnimating, setIsAnimating] = useState(false);

  // Use effect para acionar a animação sempre que selectedSkill mudar
  useEffect(() => {
    setIsAnimating(true); // Ativa a animação
    const timer = setTimeout(() => setIsAnimating(false), 500); // Remove a animação após 0.5s
    return () => clearTimeout(timer); // Limpa o timer para evitar problemas
  }, [selectedSkill]);

  const skillData = {
    react: {
      name: "React",
      description:
        "React é uma biblioteca JavaScript usada para construir interfaces de usuário. Criada pelo Facebook, ela permite o desenvolvimento de aplicações web altamente interativas e modulares por meio de componentes reutilizáveis. Utiliza o conceito de 'virtual DOM' para melhorar a performance das atualizações na interface, tornando-o ideal para grandes aplicações de página única (SPAs).",
      icon: reactSvg,
    },
    javascript: {
      name: "JavaScript",
      description:
        "JavaScript é uma das linguagens de programação mais populares no desenvolvimento web. Ela é essencial para adicionar interatividade e dinamismo às páginas, permitindo a manipulação de eventos, DOM, comunicação com servidores (usando Ajax ou Fetch), e muito mais. É amplamente utilizada tanto no frontend (navegadores) quanto no backend (via Node.js).",
      icon: javascriptSvg,
    },
    sqlserver: {
      name: "SQL Server",
      description:
        "SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft. Ele oferece suporte para consultas complexas, transações seguras e ferramentas de análise de dados robustas, sendo uma escolha popular para armazenamento de dados em aplicações empresariais de larga escala.",
      icon: sqlServerSvg,
    },
    dotnet: {
      name: ".NET",
      description:
        ".NET é um framework de desenvolvimento criado pela Microsoft que suporta várias linguagens de programação como C#. Ele é usado para construir uma ampla gama de aplicações, incluindo aplicativos de desktop, web, e móveis. O .NET Core, uma versão de código aberto e multiplataforma, permite desenvolver e executar aplicações em diferentes sistemas operacionais, como Windows, macOS e Linux.",
      icon: dotnetSvg,
    },
    typescript: {
      name: "TypeScript",
      description:
        "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao código. Criado pela Microsoft, ele visa facilitar a manutenção e escalabilidade de projetos grandes, fornecendo uma melhor detecção de erros em tempo de desenvolvimento e recursos avançados como interfaces, tipos genéricos e classes.",
      icon: typescriptSvg,
    },
    xamarin: {
      name: "Xamarin",
      description:
        "Xamarin é um framework que permite o desenvolvimento de aplicações móveis nativas para iOS, Android e Windows usando a linguagem C# e o framework .NET. Ele permite compartilhar até 90% do código entre as plataformas, facilitando o desenvolvimento de aplicativos multiplataforma com interfaces nativas e alto desempenho.",
      icon: xamarinSvg,
    },
    html: {
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) é a linguagem padrão para criar e estruturar conteúdo na web. Ele define a estrutura básica de uma página da web e organiza o conteúdo em elementos como títulos, parágrafos, links, imagens, listas, e muito mais.",
      icon: htmlSvg,
    },
    css: {
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) é a linguagem de estilo usada para descrever a aparência e o layout de uma página da web. Com CSS, você pode controlar cores, fontes, espaçamento, tamanhos, animações e o posicionamento de elementos na página.",
      icon: cssSvg,
    },
  };

  const { name, description, icon } = skillData[selectedSkill];

  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="section-title">Minhas Habilidades</h1>
        <div className="skills-slider">
          <div className="slider">
            <div className="slide-track">
              {Object.keys(skillData).map((skillKey) => (
                <div
                  className={
                    skillKey === selectedSkill ? "slide active" : "slide"
                  }
                  key={skillKey}
                  onClick={() => setSelectedSkill(skillKey)}
                >
                  <img
                    src={skillData[skillKey].icon}
                    height="100"
                    width="250"
                    alt={skillData[skillKey].name}
                  />
                </div>
              ))}
              {Object.keys(skillData).map((skillKey) => (
                <div
                  className={
                    skillKey === selectedSkill ? "slide active" : "slide"
                  }
                  key={skillKey}
                  onClick={() => setSelectedSkill(skillKey)}
                >
                  <img
                    src={skillData[skillKey].icon}
                    height="100"
                    width="250"
                    alt={skillData[skillKey].name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="skill-content">
            <img
              src={icon}
              alt={name}
              height="100"
              width="100"
              className={`skill-icon ${isAnimating ? "slide-down" : ""}`}
            />
            <h1 className={`skill-name ${isAnimating ? "slide-down" : ""}`}>
              {name}
            </h1>
            <p className={`skill-summary ${isAnimating ? "slide-down" : ""}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
