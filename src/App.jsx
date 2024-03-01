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
import Bio from './components/Bio'
import Resume from './components/Resume';


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
        // value: ["7b2cbf", "70e000",  "80ffdb"]
        value: ["80ffdb"]

      },
      shape: {
        // type: ["circle", "triangle", "polygon"],
        type: ["star"],

      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 2, max: 3 }
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
        <Bio />
       <Work />
       <Projects />
       <Resume />
       <Contact />
      </div>
      
  )
}

export default App
