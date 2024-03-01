import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiFillHome } from 'react-icons/ai';
import { TiThMenu } from "react-icons/ti";
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaUserTie, FaFileAlt } from "react-icons/fa";
import { IoAppsSharp,IoMenu } from "react-icons/io5";
import { IoMdMail, IoIosCloseCircle } from "react-icons/io";
import { CgMenuHotdog } from "react-icons/cg";




import './Styles.css';

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('state change')
    };

    

  return (
    <div>
            {/* fixed will keep the icon in a place Absolute will leave it at the top */}
        {/* <CgMenuHotdog  onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden text-gray-800 dark:text-white font-bold' size={40}/>  */}
        {nav ? <IoIosCloseCircle onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-gray-700 dark:text-white font-bold' size={40}/> : <IoMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-gray-800 dark:text-white font-bold' size={45}/>}

         {/* This is saying if our Navbar is true to show the content other wise don't show  */}
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 dark:bg-slate-800 flex flex-col justify-center items-center z-20'>


                    <a onClick={handleNav} href="#main" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiFillHome  size={20} green-600/>
                        <span className='pl-4'>Home</span>
                    </a> 
                    <a onClick={handleNav} href="#bio" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaUserTie size={20}/>
                        <span className='pl-4'>About Me</span>
                    </a>
                    <a onClick={handleNav} href="#experience" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BiSolidBriefcaseAlt2  size={20}/>
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <IoAppsSharp size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#resume" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaFileAlt size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='paths w-[25%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <IoMdMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>        
            )
            : (
                ''      
            )}
            <div className='md:block hidden fixed top-[25%] z-10 ml-4'>
                <div className='flex flex-col'>
                    <a href="#main" title='Home' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <AiFillHome size={25}/>
                    </a>
                    <a href="#bio" title='Bio' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <FaUserTie size={25}/>
                    </a>
                    <a href="#experience" title='Experience' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <BiSolidBriefcaseAlt2 size={25}/>
                    </a>
                    <a href="#projects" title='Projects' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <IoAppsSharp size={25}/>
                    </a>
                    <a href="#resume" title='Resume' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <FaFileAlt size={25}/>
                    </a>
                    <a href="#contact" title='Contact' className='rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300'>
                        <IoMdMail size={25}/>
                    </a>
                </div>
            </div>
        {/* end of Navbar logic */}

    </div>
  )
}

export default Sidenav