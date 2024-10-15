import { useRef, useEffect } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Função para ajustar os parâmetros dinamicamente com base no tamanho da tela
    const adjustForScreenSize = () => {
      const isSmallScreen = window.innerWidth < 768; // Defina seu breakpoint
      const baseNumberOfParticles = 200;
      const baseMaxDistance = 100;

      // Ajustes para telas menores
      const numberOfParticles = isSmallScreen
        ? baseNumberOfParticles / 2
        : baseNumberOfParticles;
      const maxDistance = isSmallScreen ? baseMaxDistance / 2 : baseMaxDistance;
      const speedMultiplier = isSmallScreen ? 0.3 : 0.5; // Menor velocidade em telas menores
      const fillStyle = "rgba(245, 247, 248, 0.1)";
      const strokeStyle = "rgba(245, 247, 248, 0.1)";
      const lineWidth = 1;

      return {
        numberOfParticles,
        maxDistance,
        speedMultiplier,
        fillStyle,
        strokeStyle,
        lineWidth,
      };
    };

    const settings = adjustForScreenSize();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const mouse = {
      x: null,
      y: null,
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() * 1 - 0.5) * settings.speedMultiplier;
        this.speedY = (Math.random() * 1 - 0.5) * settings.speedMultiplier;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -1;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * 2;
          this.y -= Math.sin(angle) * 2;
        }
      }

      draw() {
        ctx.fillStyle = settings.fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < settings.numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = Math.sqrt(
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
              (particlesArray[a].y - particlesArray[b].y) ** 2
          );
          if (distance < settings.maxDistance) {
            ctx.strokeStyle = settings.strokeStyle;
            ctx.lineWidth = settings.lineWidth;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });
  }, []);

  return <canvas className="background-animation" ref={canvasRef} />;
};

export default BackgroundAnimation;
