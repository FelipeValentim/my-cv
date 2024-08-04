import { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Typewriter = ({ text, speed = 75, onComplete, last = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      } else {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [currentIndex, text, speed]);

  return (
    <span
      className={
        currentIndex === text.length && !last
          ? "typewriter"
          : "typewriter cursor"
      }
    >
      {displayedText}
    </span>
  );
};

const Home = () => {
  const [writerIndex, setWriterIndex] = useState(1);

  return (
    <div className="home-container">
      <div className="home">
        <span className="subtitle">
          {writerIndex >= 1 && (
            <Typewriter
              text={"Olá, me chamo"}
              onComplete={() => setWriterIndex(2)}
            />
          )}

          <span className="color-primary">
            {writerIndex >= 2 && (
              <Typewriter
                text={" Felipe Valentim"}
                onComplete={() => setWriterIndex(3)}
              />
            )}
          </span>
        </span>
        <span className="title">
          {writerIndex >= 3 && (
            <Typewriter
              text={"Desenvolvedor "}
              onComplete={() => setWriterIndex(4)}
            />
          )}

          <span className="color-primary">
            {writerIndex >= 4 && (
              <Typewriter
                text={"Fullstack"}
                onComplete={() => setWriterIndex(5)}
              />
            )}
          </span>
        </span>
        <span className="description">
          {writerIndex >= 5 && (
            <Typewriter
              text={"Especializado em "}
              onComplete={() => setWriterIndex(6)}
            />
          )}
          <span className="color-primary">
            {writerIndex >= 6 && (
              <Typewriter
                text={"React.js"}
                onComplete={() => setWriterIndex(7)}
              />
            )}
          </span>
          {writerIndex >= 7 && (
            <Typewriter
              text={" com tecnologia "}
              onComplete={() => setWriterIndex(8)}
            />
          )}
          <span className="color-primary">
            {writerIndex >= 8 && <Typewriter text={".NET Core"} last />}
          </span>
        </span>
        <span className="social-media" title="Currículo">
          <span className="btn btn-primary">Baixar CV</span>
          <span className="btn btn-secondary" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
          <span className="btn btn-secondary" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Home;
