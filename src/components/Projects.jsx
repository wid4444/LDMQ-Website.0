import React from "react";
import ProjectItem from "./ProjectItem";

// import DannyImg from '../assets/Danny.jpeg'
import mediaImg from "../assets/media.jpeg";
import rokuImg from "../assets/roku.jpeg";
import varImg from "../assets/var.jpeg";
import var2Img from "../assets/var2.jpeg";

import { FaVuejs, FaSass } from "react-icons/fa";

const Projects = ({ VueSkills }) => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300">
        Projects
      </h1>
      <p className="text-center py-8 dark:text-stone-300 text-2xl">Tech Impact Projects</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={mediaImg} title="Media App" />
        <ProjectItem img={rokuImg} title="Roku App" />
        <ProjectItem img={varImg} title="Var App" />
        <ProjectItem img={var2Img} title="Var Second App" />
      </div>
      <br />
      <p className="text-center py-8 dark:text-stone-300 text-2xl">Websites</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={mediaImg}
          title="Avi I.T."
          link="https://www.avi-it.org/"
          github="https://github.com/wid4444/Avi-IT-Website"
          skills={
            <>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // paddingTop: '5px',
                boxShadow: "inset 0px 0px 15px white",
                borderRadius: "50%",
                border: "2px solid #41B883",
                padding: "10px",
                marginRight: "5px",
              }}
            >
              <FaVuejs fontSize={30} color="#41B883" />
              
            </span>
            <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // paddingTop: '5px',
              boxShadow: "inset 0px 0px 15px white",
              borderRadius: "50%",
              border: "2px solid #cc6699",
              padding: "10px",
              // marginRight: "5px",

            }}
            >
            <FaSass fontSize={30} color="#cc6699"/>
            </span>
            </>
          }
          // libraries="Libraries: TailwindCSS, Axios
        />
        <ProjectItem img={rokuImg} title="Roku App" />
        <ProjectItem img={varImg} title="Var App" />
        <ProjectItem img={var2Img} title="Var Second App" />
      </div>
    </div>
  );
};

export default Projects;
