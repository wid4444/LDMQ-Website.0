import React from 'react'
import danny from '../assets/danny.jpg'
import TechStack, { GitHub, LinkedIn } from './TechStack'

function Resume() {

    const openResume = () => {
        window.open('https://docs.google.com/document/d/11TdOIKU6FDGqYU4xHdSZz22D72ondlr2ixmKI8N2wuA/edit?usp=sharing', '_blank');
      };


  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 relative flex-column items-center justify-center h-auto w-full '>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300'>Resume</h1>
       <div className='flex flex-col justify-center h-auto w-full p-10'>
        <div className='flex justify-center h-auto w-full'>
    <button className='bg-[#001b5e] text-gray-100 my-6 py-3 border-solid border-1 border-sky-500 shadow-inner shadow-sky-300  rounded-3xl w-36 dark:bg-green-600 dark:text-gray-200 dark:shadow-gray-50' onClick={openResume}>
      My Resume
    </button>
</div>
    <TechStack 
                    // React={React}
                    GitHub={GitHub}
                    LinkedIn={LinkedIn}

                    />
</div>
    </div>
  )
}

export default Resume