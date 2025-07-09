// import React from 'react'
// import ProjectItem from './ProjectItem'

import {
  FaVuejs,
  FaSass,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaSquarespace,
 
} from "react-icons/fa";
import { SiAdobeillustrator, SiAdobexd, SiCanva } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
// import { RiGithubLine } from "react-icons/ri";
// import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Vue() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: '5px',
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #41B883",
        padding: "8px",
        // marginRight: "5px",
      }}
    >
      <FaVuejs fontSize={20} color="#41B883" />
    </span>
  );
}
export { Vue };

function Sass() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #cc6699",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaSass fontSize={20} color="#cc6699" />
    </span>
  );
}
export { Sass };
function React() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #61dbfb",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaReact fontSize={20} color="#61dbfb" />
    </span>
  );
}
export { React };
function Html() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #e34c26",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaHtml5 fontSize={20} color="#e34c26" />
    </span>
  );
}
export { Html };
function Css() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #4895ef",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaCss3Alt fontSize={20} color="#4895ef" />
    </span>
  );
}
export { Css };

function JavaScript() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #F0DB4F",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <IoLogoJavascript fontSize={20} color="#F0DB4F" />
    </span>
  );
}
export { JavaScript };

function SquareSpace() {
  return (
    <span
    className="border-4 border-gray-500 dark:border-gray-200"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px lightgray",
        borderRadius: "50%",
        // border: "2px solid lightgray",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaSquarespace fontSize={20} className="text-gray-500 dark:text-gray-200" />
    </span>
  );
}
export { SquareSpace };

function Figma() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #ae4dff",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <FaFigma fontSize={20} />
    </span>
  );
}
export { Figma };

function Illustrator() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #f5c460",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <SiAdobeillustrator fontSize={20} color="#f5c460" />
    </span>
  );
}
export { Illustrator };

function Xd() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #9d4edd",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <SiAdobexd fontSize={20} color="#9d4edd" />
    </span>
  );
}
export { Xd };

function Canva() {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0px 0px 15px white",
        borderRadius: "50%",
        border: "4px solid #20C4CB",
        padding: "8px",
      }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      <SiCanva fontSize={20} color="#20C4CB" />
    </span>
  );
}
export { Canva };

function LinkedIn() {
  return (
    <span
    className="hover:transition-transform hover:-translate-y-1 hover:scale-110 "
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   boxShadow: "inset 0px 0px 20px #ced4da",
      //   borderRadius: "50%",
      //   padding: "10px",
        
      // }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      {/* <FaLinkedin fontSize={30} color="lightblue" />
      <link rel="https://www.linkedin.com/in/leobardo-martinez/" href="linkedin" /> */}

      {/* <a href="https://www.linkedin.com/in/leobardo-martinez/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin  className="text-[#0077b5] dark:text-blue-400" size={40}/>
      </a> */}

<a
  href="https://www.linkedin.com/in/leobardo-martinez/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
             bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] dark:from-[#212f45] dark:to-[#006466]
               
             shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_rgba(255,255,255,1)]
             hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_rgba(255,255,255,0.3)] 
             dark:shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_#6ebcb1]
                 dark:hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_#6ebcb1] 
             hover:translate-y-[-2px] hover:scale-105 
             transform transition-all duration-300 ease-in-out border border-[#FAEDCD] dark:border-[#144552]"
>
  <FaLinkedin size={40} 
  className="text-[#0077b5] dark:text-blue-400"/>
</a>

    </span>
  );
}
export { LinkedIn };

function GitHub() {
  return (
    <span
    className="hover:transition-transform hover:-translate-y-1 hover:scale-110 mr-5"

      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   boxShadow: "inset 0px 0px 15px #ced4da",
      //   borderRadius: "50%",
      //   padding: "10px",
      //   marginRight: "10px",
      // }}
      // className='flex justify-center align-center shadow-inner  shadow-white rounded-full border-2 border-[#cc6699] p-2 mr-5'
    >
      {/* <FaGithub fontSize={30} color="violet" /> */}
      <a href="https://github.com/wid4444" 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                 bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] dark:from-[#212f45] dark:to-[#006466]
                 shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_rgba(255,255,255,1)]
                 hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_rgba(255,255,255,0.3)] 
                 dark:shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_#6ebcb1]
                 dark:hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_#6ebcb1] 
                 hover:translate-y-[-2px] hover:scale-105 
                 transform transition-all duration-300 ease-in-out border border-[#FAEDCD] dark:border-[#144552]"
    >
  <FaGithub  size={40} 
  className="text-[#7b2cbf] dark:text-purple-400"/>
</a>
     
    </span>
  );
}
export { GitHub };



function TechStack({
  Vue,
  React,
  Sass,
  Html,
  Css,
  JavaScript,
  SquareSpace,
  Figma,
  Illustrator,
  Xd,
  Canva,
  LinkedIn,
  GitHub,
  
}) {
  return (
    <>
      <div
        className="tech-stack-skills"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {Vue && <Vue />}
        {Sass && <Sass />}
        {React && <React />}
        {Html && <Html />}
        {Css && <Css />}
        {JavaScript && <JavaScript />}
        {SquareSpace && <SquareSpace />}
        {Figma && <Figma />}
        {Illustrator && <Illustrator />}
        {Xd && <Xd />}
        {Canva && <Canva />}
        {GitHub && <GitHub />}
        {LinkedIn && <LinkedIn />}
      </div>
      {/* <div>{VueSkills.map(skill => {skill})}</div> */}
    </>
  );
}

export default TechStack;
