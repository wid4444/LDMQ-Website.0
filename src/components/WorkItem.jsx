import React from 'react'

const WorkItem = ({ year, title, duration, details, company }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-green-500 dark:border-teal-400' >
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-blue-400 dark:bg-purple-500 rounded-full mt-1.5 -left-1.5 border-white '/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md dark:bg-slate-300 dark:text-[#001b5e]'>{year}</span>
                <span className='text-xl font-semibold text-[001b5e] dark:text-emerald-500'>{title}</span>
                <span className='my-1 text-lg font-normal leading-none text-stone-400 dark:text-gray-300'>{company}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>

           
            {/* <p className='my-2 text-base font-normal text-stone-500'>{company}</p>           */}

            </p>
            <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem