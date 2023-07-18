import React from 'react'
import ProjectItem from './ProjectItem'
// import DannyImg from '../assets/Danny.jpeg'
import mediaImg from '../assets/media.jpeg'
import rokuImg from '../assets/roku.jpeg'
import varImg from '../assets/var.jpeg'
import var2Img from '../assets/var2.jpeg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            lorem 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={mediaImg} title='Media App'/>
            <ProjectItem img={rokuImg} title='Roku App'/>
            <ProjectItem img={varImg} title='Var App'/>
            <ProjectItem img={var2Img} title='Var Second App'/>

        </div>
    </div>
  )
}

export default Projects