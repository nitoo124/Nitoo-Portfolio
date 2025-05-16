"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#16325B",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#117554",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;