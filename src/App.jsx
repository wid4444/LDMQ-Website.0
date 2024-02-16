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

  // const [init, setInit] = useState(false);

  //   useEffect(() => {
  //       if (init) {
  //           return;
  //       }

  //       useCallback(async (engine) => {
  //           await loadFull(engine);
  //       }).then(() => {
  //           setInit(true);
  //       });
  //   }, []);

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
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
         {/* {init && <Particles options={options}/>} */}
       <Sidenav />
       <Main />
       <Work />
       <Projects />
       <Contact />
      </div>
      
  )
}

export default App
