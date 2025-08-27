import { useRef, useEffect, useCallback } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const settingsRef = useRef({});

  const adjustForScreenSize = useCallback(() => {
    const isSmallScreen = window.innerWidth < 768;
    const baseNumberOfParticles = 200;
    const baseMaxDistance = 100;

    const numberOfParticles = isSmallScreen
      ? baseNumberOfParticles / 2
      : baseNumberOfParticles;
    const maxDistance = isSmallScreen ? baseMaxDistance / 2 : baseMaxDistance;
    const speedMultiplier = isSmallScreen ? 0.3 : 0.5;

    return {
      numberOfParticles,
      maxDistance,
      speedMultiplier,
      fillStyle: "rgba(245, 247, 248, 0.1)",
      strokeStyle: "rgba(245, 247, 248, 0.1)",
      lineWidth: 1,
    };
  }, []);

  const initParticles = useCallback((canvas, settings) => {
    particlesArrayRef.current = [];
    for (let i = 0; i < settings.numberOfParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particlesArrayRef.current.push({
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() * 1 - 0.5) * settings.speedMultiplier,
        speedY: (Math.random() * 1 - 0.5) * settings.speedMultiplier,
      });
    }
  }, []);

  const updateParticle = useCallback((particle, canvas, mouse) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Rebate nas bordas
    if (particle.x > canvas.width || particle.x < 0) {
      particle.speedX *= -1;
    }
    if (particle.y > canvas.height || particle.y < 0) {
      particle.speedY *= -1;
    }

    // Interação com o mouse
    if (mouse.x && mouse.y) {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        particle.x -= Math.cos(angle) * 2;
        particle.y -= Math.sin(angle) * 2;
      }
    }
  }, []);

  const drawParticle = useCallback((ctx, particle, fillStyle) => {
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }, []);

  const connectParticles = useCallback((ctx, particles, settings) => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const distance = Math.sqrt(
          Math.pow(particles[a].x - particles[b].x, 2) +
            Math.pow(particles[a].y - particles[b].y, 2)
        );
        if (distance < settings.maxDistance) {
          ctx.strokeStyle = settings.strokeStyle;
          ctx.lineWidth = settings.lineWidth;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    settingsRef.current = adjustForScreenSize();

    // Configurar canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Inicializar partículas
    initParticles(canvas, settingsRef.current);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Atualizar e desenhar partículas
      particlesArrayRef.current.forEach((particle) => {
        updateParticle(particle, canvas, mouseRef.current);
        drawParticle(ctx, particle, settingsRef.current.fillStyle);
      });

      // Conectar partículas
      connectParticles(ctx, particlesArrayRef.current, settingsRef.current);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners com debounce para resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        settingsRef.current = adjustForScreenSize();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(canvas, settingsRef.current);
      }, 250); // Debounce de 250ms
    };

    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // Otimização para mobile: usar passive events
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length > 0) {
          mouseRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          };
        }
      },
      { passive: true }
    );

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      clearTimeout(resizeTimeout);
    };
  }, [
    adjustForScreenSize,
    initParticles,
    updateParticle,
    drawParticle,
    connectParticles,
  ]);

  return <canvas className="background-animation" ref={canvasRef} />;
};

export default BackgroundAnimation;
