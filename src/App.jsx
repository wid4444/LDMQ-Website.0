import { useState, useEffect, useCallback } from 'react'
import Particles from "react-particles";
// import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {


  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 900
        }
      },
      color: {
        value: ["A3C7D6", "9F73AB",  "#10b981"]
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 2, max: 4 }
      },
      links: {
        enable: true,
        distance: 100,
        color: "#808080",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
      <div className='bg-gray-300 dark:bg-sky-950'>
         <Particles options={options} init={particlesInit} loaded={particlesLoaded}/>
       <Sidenav />
       <Main />
       <Work />
       <Projects />
       <Contact />
      </div>
      
  )
}

export default App
