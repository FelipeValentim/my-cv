import { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import animation from "../animations/Animation.json";

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
    <section id="home">
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
              {writerIndex >= 8 && (
                <Typewriter
                  text={".NET Core"}
                  last
                  onComplete={() => setWriterIndex(9)}
                />
              )}
            </span>
          </span>
          <span className="social-media" title="Currículo">
            {writerIndex >= 9 && (
              <>
                <span
                  className="btn btn-primary grow"
                  onClick={() =>
                    window.open(
                      "https://drive.usercontent.google.com/u/0/uc?id=1lVgBm80sTnW4R-DODmtW64FgwJCKhFkT&export=download",
                      "_blank"
                    )
                  }
                >
                  Baixar CV
                </span>
                <span
                  className="btn btn-secondary grow"
                  title="LinkedIn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/felipe-valentim/",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span
                  className="btn btn-secondary grow"
                  title="GitHub"
                  onClick={() =>
                    window.open("https://github.com/FelipeValentim", "_blank")
                  }
                >
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </>
            )}
          </span>
        </div>
        <div className="picture">
          {/* {writerIndex >= 9 && ( */}
          <div className="image-container grow">
            <img
              className="image image-front"
              src="https://felipevalentim.github.io/my-cv/me.jpg"
            />

            <FontAwesomeIcon
              className="image image-back"
              icon={faInstagram}
              onClick={() =>
                window.open("https://www.instagram.com/sahrutar/", "_blank")
              }
            />
          </div>
          {/* )} */}
        </div>
        <div className="animation-container">
          <Lottie
            className="lottie-animation"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
