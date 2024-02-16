import React from 'react'

const ProjectItem = ({img, title, link, github, skills, libraries }) => {
  return (
   
    <div className='relative flex items-center justify-center h-auto w-full border-solid border-2 border-gray-400 shadow-md shadow-gray-400 rounded-2xl group hover:bg-gradient-to-r from-cyan-950 to-violet-950'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 '/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='flex justify-center align-middle pb-2 pt-2 text-white text-center ' >{skills}</p>
            <p className='flex justify-center align-middle pt-2 text-white text-center ' >{libraries}</p>
            
<div className='flex items-center justify-center space-x-4'>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Web page</p>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Repo</p>
            </a>
            </div>
            
        </div>
    </div>
   
  )
}

export default ProjectItem