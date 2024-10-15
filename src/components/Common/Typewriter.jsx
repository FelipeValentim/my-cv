/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 50, onComplete, last = false }) => {
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

export default Typewriter;
