import "./App.css";
import "./Common.css";
import { useLottie } from "lottie-react";
import loading from "./loading.json";
import React from "react";
import { SnackBar } from "./SnackBar";
import Header from "./components/Header";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Home from "./components/Home";
import Experience from "./components/Experience";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const Loading = () => {
    const options = {
      animationData: loading,
      loop: false,
      onComplete: () => setIsLoading(false),
    };

    const { View } = useLottie(options);

    return <div className="loading">{View}</div>;
  };

  const [isMobile, setIsMobile] = React.useState(false);

  //choose the screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1468);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackgroundAnimation />

          <div className="main-container">
            <div className="fade">
              <Header />
              <Home />
              <Experience />

              <SnackBar />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
