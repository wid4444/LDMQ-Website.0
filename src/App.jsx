import { useState, useEffect, useCallback } from 'react'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Bio from './components/Bio'
import Header from './components/Header';
import ContactForm from './components/ContactOne';


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
        value: ["7b2cbf", "70e000",  "80ffdb"]
        // value: ["80ffdb"]

      },
      shape: {
        // type: ["circle", "triangle", "polygon"],
        // type: ["star"],
        type: ["circle"],


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
          enable: true, // this will enable the particles to connect to the mouse
          mode: "grab"
        },
        onClick: {
          enable: true, // this will create more particles when clicked
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 240, // distance that particles will connect to the pointer
          links: {
            opacity: .5 // with of the lines connecting the particles
          }
        },
        push: {
          quantity: 4  // amount of new particles per click
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


// const [currentSection, setCurrentSection] = useState('');

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setCurrentSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.7 } // Adjust this value based on your needs
//     );

//     const sections = document.querySelectorAll('section');
//     sections.forEach(section => observer.observe(section));

//     return () => {
//       sections.forEach(section => observer.unobserve(section));
//     };
//   }, []);




  return (
    <>
    <Header />
         {/* <Particles options={options} init={particlesInit} loaded={particlesLoaded}/> */}
         <div id="particles-container">
  <Particles options={options} init={particlesInit} loaded={particlesLoaded}/>
</div>

      <div className='bg-gray-300 dark:bg-sky-950'>
         {/* <Sidenav currentSection={currentSection} /> */}
      <Main id="main" />
      <Bio id="bio" />
      <Work id="work" />
      <Projects id="projects" />
      {/* <Resume id="resume" /> */}
      <ContactForm id="contact" />
      </div>
      </>
      
  )
}

export default App
