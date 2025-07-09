import  { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaLinkedin } from 'react-icons/fa/'
// import DannyImg from '../assets/Danny.jpeg'
import Toggle from './Toggle'
// import TechStack, { GitHub, LinkedIn } from './TechStack';
// import brush from '../assets/brush2.png'
import lightVideo from '../assets/Danny1.mp4'
import darkVideo from '../assets/Danny.mp4'
import mouse1 from '../assets/mouse2.gif'
import mouse from '../assets/mouse3.gif'



const Main = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode])

  const handleChange = () => {
    setDarkMode(!darkMode)
  }


  // return (
  //   <div id='main' className=' xsm:pt-10 2xl:h-[100vh] xl:h-[80vh] md:h-[60vh] sm:h-[40vh] xsm:h-[30vh] flex-col justify-center items-end bg-gray-300 dark:bg-sky-950'>
  //       {/* <img className='absolute pb-40 xsm:pb-0  object-cover scale-x-[1]  ' src={brush} alt="" /> */}
        
  //       {darkMode ? (
  //       <video
  //         className='absolute pb-40 xsm:pb-0 object-cover scale-x-[1]'
  //         autoPlay
  //         loop
  //         muted
  //         playsInline
  //         src={darkVideo} // Make sure to define darkVideo or replace it with your video path
  //       ></video>
  //     ) : (
  //       <video
  //         className='absolute pb-40 xsm:pb-0 object-cover scale-x-[1]'
  //         autoPlay
  //         loop
  //         muted
  //         playsInline
  //         src={lightVideo} // Make sure to define lightVideo or replace it with your video path
  //       ></video>
  //     )}
  //       <div className='w-full 2xl:h-full xl:h-3/4 lg:h-3/4 md:h-1/2 sm:h-1/2 xsm:h-1/3 absolute top-0 left-0 sm:pb-0 xsm:pb-0 flex items-end' >
        
  //       {/* <button onClick={handleChange} className='fixed left-5 top-5 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 '>{darkMode ? 'Light' : "Dark"} Mode </button> */}

  //       <Toggle 
  //         isChecked={darkMode} 
  //         // darkMode={darkMode} 
  //         handleChange={handleChange}
  //         />
  //           <div className='max-w-[1000px] 2xl:pb-[50px] xl:pb-[40px] lg:pb-[100px] md:pb-[10px] sm:pb-[100px] xsm:pb-0 m-auto h-full w-full flex flex-col justify-end'>
  //               {/* <h1 className='flex justify-center sm:text-6xl text-4xl font-bold text-gray-800 dark:text-gray-200' >I'm Danny Martinez</h1> */}
  //               <h2 className='flex justify-center items-center sm:text-3xl 2xl:text-5xl pt-4 text-blue-800 dark:text-gray-200 font-sans'>
  //                   I'm &nbsp;
  //               <TypeAnimation
  //     sequence={[
  //       // Same substring at the start will only be typed out once, initially
  //       'a Front-End Developer',
  //       2000, // wait 1s before replacing "Mice" with "Hamsters"
  //       'a UI/UX Designer',
  //       2000,
  //       'a Diversity and Inclusion Advocate',
  //       2000,
  //       'an Artist',
  //       2000
  //     ]}
  //     wrapper="span"
  //     speed={50}
  //     style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
  //     repeat={Infinity}
  //   />

  //               </h2>
                
  //               {/* <div className='flex lg:justify-center gap-3 max-w-[700px] w-full xsm:flex xsm:justify-center border-2'> */}
  //                   {/* <FaTwitter className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
  //                   <FaFacebookF className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
  //                   <FaInstagram className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/> */}
  //                   {/* <FaLinkedinIn className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
  //                   <FaGithub className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/> */}


  //                   {/* <TechStack 
  //                   LinkedIn={LinkedIn}
  //                   GitHub={GitHub}
                    

  //                   /> */}
                    
  //               {/* </div> */}
  //               <div className='w-full flex justify-center 2xl:mt-[100px] xl:mt-[100px] lg:mt-[100px] md:mt-[50px] sm:mt-[30px] xsm:mt-[30px]'>
  //               {darkMode ? (
  //               <img src={mouse} className="2xl:w-10 xl:w-10 lg:w-10 xsm:w-7" alt="Description of the GIF" />
  //             ) : (
  //               <img src={mouse1} className="2xl:w-10 xl:w-10 lg:w-10 xsm:w-7" alt="Description of the GIF" />
  //             )}

  //               </div>
  //           </div>
            
  //       </div>
  //   </div>
  // )

  // return(
  // <Toggle 
  //         isChecked={darkMode} 
  //         // darkMode={darkMode} 
  //         handleChange={handleChange}
  //         />
  // )
}

export default Main