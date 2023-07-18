import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa/'
// import DannyImg from '../assets/Danny.jpeg'


const Main = () => {


  return (
    <div id='main'>
        <img className='w-full h-screen object-cover //object-left// scale-x-[1]' src="images/lens.jpeg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Danny Martinez</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
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
                    <FaTwitter className='cursor-pointer text-gray-800' size={20}/>
                    <FaFacebookF className='cursor-pointer text-gray-800' size={20}/>
                    <FaInstagram className='cursor-pointer text-gray-800' size={20}/>
                    <FaLinkedinIn className='cursor-pointer text-gray-800' size={20}/>
                    <FaGithub className='cursor-pointer text-gray-800' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main