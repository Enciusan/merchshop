import React from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <div>
      <Particles
        options={{
          background: {
            color: "white",
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "f0f0f0",
            },
            life: {
                duration: {
                    sync: false,
                    value: 10
                  },
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 1
                  }
              },
            move: {
                direction: "top",
                enable: true,
                outMode: "none",
                random: false,
                speed: 3,
                straight: false,
              },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit:0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2.5,
              },
              value: 1,
            },
            detectRetina: true,
          },
        }}
      />
    </div>
  );
};

export default Particle;
