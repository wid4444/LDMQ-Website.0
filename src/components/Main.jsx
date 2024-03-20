import  { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaLinkedin } from 'react-icons/fa/'
// import DannyImg from '../assets/Danny.jpeg'
import Toggle from './Toggle'
// import TechStack, { GitHub, LinkedIn } from './TechStack';
import brush from '../assets/brush2.png'



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



  return (
    <div id='main' className='2xl:h-screen xl:h-screen md:h-screen sm:h-screen xsm:h-screen flex justify-center bg-gray-300 dark:bg-sky-950'>
        <img className='absolute pb-40 xsm:pb-0  object-cover scale-x-[1]  ' src={brush} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 sm:pb-0 xsm:pb-0' >
          
        {/* <button onClick={handleChange} className='fixed left-5 top-5 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 '>{darkMode ? 'Light' : "Dark"} Mode </button> */}

        <Toggle 
          isChecked={darkMode} 
          // darkMode={darkMode} 
          handleChange={handleChange}
          />
            <div className='max-w-[700px] 2xl:pb-96 xsm:pb-0 m-auto h-full w-full flex flex-col justify-center items-middle'>
                <h1 className='flex justify-center sm:text-6xl text-4xl font-bold text-gray-800 dark:text-gray-200' >I'm Danny Martinez</h1>
                <h2 className='flex justify-center sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-gray-200'>
                    I'm 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Front-End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'a UI/UX Designer',
        2000,
        'a Diversity and Inclusion Advocate',
        2000,
        'an Artist',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />

                </h2>
                <div className='flex lg:justify-start gap-3 pt-6 max-w-[700px] w-full xsm:flex xsm:justify-center'>
                    {/* <FaTwitter className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaFacebookF className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaInstagram className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/> */}
                    {/* <FaLinkedinIn className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaGithub className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/> */}


                    {/* <TechStack 
                    LinkedIn={LinkedIn}
                    GitHub={GitHub}
                    

                    /> */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main