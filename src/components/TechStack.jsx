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
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

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
      <FaVuejs fontSize={30} color="#41B883" />
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
      <FaSass fontSize={30} color="#cc6699" />
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
      <FaReact fontSize={30} color="#61dbfb" />
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
      <FaHtml5 fontSize={30} color="#e34c26" />
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
      <FaCss3Alt fontSize={30} color="#4895ef" />
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
      <IoLogoJavascript fontSize={30} color="#F0DB4F" />
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
      <FaSquarespace fontSize={30} className="text-gray-500 dark:text-gray-200" />
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
      <FaFigma fontSize={30} />
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
      <SiAdobeillustrator fontSize={30} color="#f5c460" />
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
      <SiAdobexd fontSize={30} color="#9d4edd" />
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
      <SiCanva fontSize={30} color="#20C4CB" />
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

      <a href="https://www.linkedin.com/in/leobardo-martinez/" target="_blank" rel="noopener noreferrer">
  <FiLinkedin className="text-[#0077b5] dark:text-blue-400" size={40}/>
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
      <a href="https://github.com/wid4444" target="_blank" rel="noopener noreferrer">
  <RiGithubLine  size={40} className="text-[#7b2cbf] dark:text-purple-400"/>
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
