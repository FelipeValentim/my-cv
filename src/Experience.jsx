import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.css";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Experience = () => {
  return (
    <div className="experience fade">
      <div className="education">
        <h1>Educação</h1>
        <div className="experience-section">
          <h2>
            Ciência da Computação - <span>UERJ</span>
          </h2>
          <h3>2019-2024</h3>
          <p>
            Estudante entusiasmado de Ciência da Computação na UERJ, estou
            buscando oportunidades para aplicar minha paixão pela tecnologia e
            meu conhecimento em desenvolvimento de software. Estou ansioso para
            aprender e contribuir em projetos desafiadores. Minha curiosidade
            incessante e minha mentalidade de aprendizado contínuo me
            impulsionam a explorar novas áreas, como inteligência artificial e
            computação em nuvem. Determinado a crescer e fazer a diferença,
            estou pronto para embarcar em uma jornada emocionante rumo ao
            sucesso na área da Ciência da Computação enquanto estudo na UERJ.
            <div className="responsibilities">
              Responsabilidades:
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Métodos de Busca
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Estrutura de Dados
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Teste de Software
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
      <div className="work">
        <h1>Trabalho</h1>
        <div className="experience-section">
          <h2>
            Desenvolvedor Full-Stack - <span>Practice Software</span>
          </h2>
          <h3>2022-Atualmente</h3>
          <p>
            Na Practice Software, contribuí ativamente para o desenvolvimento de
            aplicativos utilizando tecnologias como .NET Framework, .NET 6 e
            React, colaborando em todas as etapas do ciclo de vida do
            desenvolvimento de software. Além disso, utilizei o Azure DevOps
            para gerenciar projetos de forma eficiente, facilitando a
            colaboração e a entrega contínua, com ferramentas CI/CD e
            gerenciamento dos repositórios GIT.
            <div className="responsibilities">
              Responsabilidades:
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircle} /> Manutenção de aplicação
                  MVC em .NET Framework
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Criação e Manutenção de aplicações em .NET 6
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Manutenção e desenvolvimento de features em aplicações Xamarin
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Criação e Manutenção de APIs
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Manutenção de páginas MVC
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Criaçao de CI/CD para projetos .NET Framework, .NET 6, React e
                  API
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
