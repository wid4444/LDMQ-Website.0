import React from 'react'
import danny from '../assets/danny.jpg'

function Bio() {
  return (
    <div id='bio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 relative flex-column items-center justify-center h-auto w-full '>
                  <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300'>Bio</h1>
        <div className='flex justify-center h-auto w-full p-10'>
        <img src={danny} alt="" className='relative flex items-center justify-center h-auto w-full shadow-2xl shadow-gray-400 hover:transition-transform hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-md hover:shadow-gray-400 rounded-2xl group' style={{borderRadius:'50%', width:"300px", }}/>
        </div>
        <div>
        <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Hi! My name is Leobardo but my family and friends call me Danny . When I was 14 years old I immigrated to the United States in search of the American Dream.</p>
        <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>I'm a Jr. Full Stack Java Software Developer based in Middletown, DE. I am bi-lingual and have over 10 years of experience in manufacturing. I am a self-taught artist and woodworker.</p>
        <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>I have volunteered at a nonprofit organization to paint murals around the city of Wilmington, DE. and collaborated with other groups on smaller projects.</p>
        <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>About three years ago I found a passion for woodworking, and since then I have created a number of projects like cabinets, floating shelves, and even a small bar.</p>
        <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>With my attention to detail, creativity, and communication I like to create responsive, and user-friendly application ideas. I am always interested in learning new languages and frameworks, improving my skills, and making contributions to society.</p>
        </div>

    </div>
  )
}

export default Bio