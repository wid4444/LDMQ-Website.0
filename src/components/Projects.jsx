// import React from "react";
import ProjectItem from "./ProjectItem";
import TechStack, { Sass, Vue, React, Html, Css, JavaScript, SquareSpace, Figma, Illustrator, Xd, Canva } from "./TechStack";
// import { Vue } from "./TechStack";

// import DannyImg from '../assets/Danny.jpeg'

import educationPaper from "../assets/innovation_edu_aera_paper_final.pdf";
import avi from "../assets/avi.png";
import monica from "../assets/monica.png";
import education from "../assets/inno-education.png";
import underserved from "../assets/inno-underserved.png";
import westend from "../assets/we-sire.png";
// import waSire from "../assets/wa-sire.png";

// import { FaVuejs, FaSass, FaSquarespace } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] md:pl-20 m-auto p-4 py-16  rounded-3xl">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300">
        Projects
      </h1>
      <p className="text-center py-8 dark:text-stone-300 text-3xl">Tech Impact Projects</p>
      <div className="grid sm:grid-cols-2 gap-1">
        <ProjectItem 
        img={education} 
        title="Innovation Education"
          link="https://secondary-to-post-secondary-student-pipeline.pages.dev/"
          github="https://github.com/de-data-lab/secondary-to-post-secondary-student-pipeline"
          wireframe='https://xd.adobe.com/view/5e764acf-300e-4540-bd13-e8b0a444cdf6-0b25/'
          paper={educationPaper}
          skills={
          <TechStack 
          React={React}
          JavaScript={JavaScript}
          Css={Css}
          Html={Html}
          Xd={Xd}
          />
          } 
          />
        <ProjectItem 
        img={underserved} 
        title="Innovation Underserved" 
        link="https://innovation-underserved.pages.dev/"
          github="https://github.com/de-data-lab/innovation-underserved"
          skills={
          <TechStack 
          React={React}
          JavaScript={JavaScript}
          Css={Css}
          Html={Html}
          // Canva={Canva}
          />
          }
        />


        <ProjectItem 
        img={westend} 
        title="West End SIRE" 
        link="https://west-end-social-impact-report.pages.dev/"
          github="https://github.com/de-data-lab/west-end-social-impact-report"
          skills={
          <TechStack 
          React={React}
          JavaScript={JavaScript}
          Css={Css}
          Html={Html}
          Xd={Xd}
          />
          }
        />

{/* <ProjectItem 
        img={waSire} 
        title="Wilmington Alliance SIRE" 
        // link="https://west-end-social-impact-report.pages.dev/"
          // github="https://github.com/de-data-lab/west-end-social-impact-report"
          wireframe='https://xd.adobe.com/view/ce76f7b3-2bb9-48e7-a9c7-1e23098d7403-9b25/'
          skills={
          <TechStack 
          // React={React}
          // JavaScript={JavaScript}
          // Css={Css}
          // Html={Html}
          Xd={Xd}
          />
          }
        /> */}
      </div>
      <br />
      <p className="text-center py-8 dark:text-stone-300 text-3xl">Websites</p>
      <div className="grid sm:grid-cols-2 gap-5">
        <ProjectItem
          img={avi}
          title="Avi I.T."
          link="https://www.avi-it.org/"
          github="https://github.com/wid4444/Avi-IT-Website"
          skills={
          <TechStack 
          Vue={Vue} 
          Sass={Sass}
          JavaScript={JavaScript}
          Html={Html}
          />
          }
          />
        <ProjectItem 
        img={monica} 
        title="Monica Lopez" 
        link="https://monica-a-lopez.com/"
        skills={
          <TechStack
          SquareSpace={SquareSpace}
          Illustrator={Illustrator}
          Canva={Canva}
          />
        }
        />
        {/* <ProjectItem img={varImg} title="Var App" />
        <ProjectItem img={var2Img} title="Var Second App" /> */}
      </div>
    </div>
  );
};

export default Projects;
