// import React from "react";
import ProjectItem from "./ProjectItem";
import TechStack, { Sass, Vue, React, Html, Css, JavaScript, SquareSpace, Figma, Illustrator, Xd, Canva } from "./TechStack";
import Popup from './Popup';
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
        title="Education Enrollment-Workforce Pipeline"
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
          description={
          <Popup 
          description="Password: Education24!,  
          This is an open-source methodology for integrating multi-level longitudinal data to quantitatively represent Delaware's secondary school-to-workforce pipeline. Created an interactive website to visualize enrollment and graduation counts for Delaware students, providing policymakers with valuable insights for data-driven decision-making in fostering a resilient labor market."
          
          />

          }
          />
          
        <ProjectItem 
        img={underserved} 
        title="Recidivism & Prison Gerrymandering" 
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
          description={
            <Popup description="This is an informational website spotlighting two critical criminal justice policy issues, offering a comparative analysis between Delaware and the wider United States."/>
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
          description={
            <Popup description="This is an app with a transformative initiative to empower non-profits to assess their data maturity and align it with organizational goals. Facilitated clients in evaluating and enhancing their data processes, culminating in the creation of visually engaging dashboards to represent key insights,"/>
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
          description={
            <Popup description="This is a non-profit's website that I redesigned using Vue.js adding mobile responsiveness, a hamburger menu, a contact form, and a carousel slideshow."/>
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
        description={
          <Popup description="This is an artist’s website that I designed and built using Squarespace to help her showcase her work"/>
          }
        />
        {/* <ProjectItem img={varImg} title="Var App" />
        <ProjectItem img={var2Img} title="Var Second App" /> */}
      </div>
    </div>
  );
};

export default Projects;
