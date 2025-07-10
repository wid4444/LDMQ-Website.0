
// import TechStack, { LinkedIn, GitHub } from './TechStack';
// import { AiTwotoneMail } from "react-icons/ai";
// import { FaEnvelope } from "react-icons/fa";

// function ContactForm() {
 

  

//   return (
//     <>
//     <div id='contact' className='max-w-[800px] h-[465px] md:pl-20 m-auto px-20 py-20 pb-20 xsm:px-5 flex-col justify-center text-center'>


      
//       <br/>
//       <div className='flex flex-row align-middle justify-center gap-2 mb-6 pl-5 2xl:text-xl xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'>
//         <span>Let's get in touch</span>
//         {/* → <span className='email'> ldmq4444@gmail.com</span>  */}
       
//         </div>
//      <div className='flex justify-center align-middle'>
//      <a href="mailto:ldmq4444@gmail.com"  rel="noreferrer">
//           <FaEnvelope size={40} className="cursor-pointer z-50 mr-10 hover:transition-transform hover:-translate-y-1 hover:scale-110 text-lime-600 dark:text-lime-500"/>
//         </a>
//         <TechStack 
//       LinkedIn={LinkedIn}
//       GitHub={GitHub}
//       />
//      </div>
      
// <p className='mt-8 my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'>This was thoughtfully designed and meticulously coded using Visual Studio Code, by yours truly. </p> 
//       <p className='my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'>  Built with React.js and Tailwind CSS, deployed with Cloudflare.</p>

//     </div>
//     <div>
      
//     </div>
//     </>
  
//   );
// }

// export default ContactForm;


import TechStack, { LinkedIn, GitHub } from './TechStack';
import { FaEnvelope } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      <div
        id="contact"
        className='max-w-[1040px] m-auto 2xl:mr-40 xl:mr-20 p-20 py-16 mb-[9.375rem] relative flex flex-col items-center justify-center h-auto w-full bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] border border-[#FAEDCD] dark:border-[#144552] dark:from-[#4d194d] dark:to-[#006466] rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.3)]'
      >
        <div className="flex flex-row justify-center items-center gap-2 mb-6 pl-5 2xl:text-xl xsm:text-sm font-extrabold text-gray-800 dark:text-emerald-50 drop-shadow-md">
          <span className="tracking-wide text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-green-400 dark:from-lime-300 dark:to-emerald-200">
            Let's get in touch
          </span>
        </div>

        <div className="flex justify-center items-center gap-8 mt-4">

          {/* <a href="mailto:ldmq4444@gmail.com" rel="noreferrer">
            <FaEnvelope
              size={40}
              className="cursor-pointer z-50 hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lime-600 dark:text-lime-400 drop-shadow-lg"
            />
          </a> */}
          <a
            href="mailto:ldmq4444@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                       bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] dark:from-[#212f45] dark:to-[#006466]
            
             shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_rgba(255,255,255,1)]
             hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_rgba(255,255,255,0.3)] 
             dark:shadow-[-6px_6px_5px_rgba(0,0,0,0.5),1px_-1px_6px_#6ebcb1]
                 dark:hover:shadow-[-8px_8px_12px_rgba(0,0,0,0.5),3px_-3px_6px_#6ebcb1] 
             hover:translate-y-[-2px] hover:scale-105 
             transform transition-all duration-300 ease-in-out border border-[#FAEDCD] dark:border-[#144552]"
          >
            <FaEnvelope size={40}
            className="text-[#6ebcb1] dark:text-[#6ebcb1]" />
          </a>



          <TechStack LinkedIn={LinkedIn} GitHub={GitHub} />
        </div>

        <p className="mt-10 text-md font-semibold text-gray-700 dark:text-emerald-100 drop-shadow-sm">
          This was thoughtfully designed and meticulously coded using Visual Studio Code, by yours truly.
        </p>
        <p className="mt-2 text-md font-semibold text-gray-700 dark:text-emerald-100 drop-shadow-sm">
          Built with React.js and Tailwind CSS, deployed with Cloudflare.
        </p>
      </div>
    </>
  );
}

export default ContactForm;