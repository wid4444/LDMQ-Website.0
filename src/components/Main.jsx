import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa/'
// import DannyImg from '../assets/Danny.jpeg'
import Toggle from './Toggle'



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
    <div id='main' className=' bg-white dark:bg-black'>
        <img className='w-full h-screen object-cover //object-left// scale-x-[1]' src="images/lens.jpeg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/50' >
          
        {/* <button onClick={handleChange} className='fixed left-5 top-5 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 '>{darkMode ? 'Light' : "Dark"} Mode </button> */}

        <Toggle 
          isChecked={darkMode} 
          // darkMode={darkMode} 
          handleChange={handleChange}
          />
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 dark:text-gray-400' >I'm Danny Martinez</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-gray-400'>
                    I'm 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Front-End Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'a UI Designer',
        2000,
        'a Diversity and Inclusion Advocate',
        2000,
        ' an Artist',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />

                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaFacebookF className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaInstagram className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaLinkedinIn className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                    <FaGithub className='cursor-pointer text-gray-800 dark:text-gray-400' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main