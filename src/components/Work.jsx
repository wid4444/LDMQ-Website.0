import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2021,
        title: 'Software Developer',
        duration: '2 Years',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
    },
    {
        year: 2022,
        title: 'Software Developer',
        duration: '2 Years',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
    },
    {
        year: 2023,
        title: 'Software Developer',
        duration: '2 Years',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
    },
    {
        year: 2024,
        title: 'Software Developer',
        duration: '2 Years',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        { data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work