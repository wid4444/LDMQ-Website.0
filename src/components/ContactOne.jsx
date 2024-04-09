
import TechStack, { LinkedIn, GitHub } from './TechStack';
import { AiTwotoneMail } from "react-icons/ai";

function ContactForm() {
 

  

  return (
    <>
    <div id='contact' className='max-w-[800px] md:pl-20 m-auto px-20 py-20 pb-20 xsm:px-5 flex-col justify-center text-center'>


      
      <br/>
      <div className='flex flex-row align-middle justify-center gap-2 my-2 pl-5 2xl:text-xl xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'><span>Let's get in touch</span> → <span className='email'> ldmq4444@gmail.com</span> </div>
      <TechStack 
      LinkedIn={LinkedIn}
      GitHub={GitHub}
      />
<p className='mt-8 my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'>This was thoughtfully designed and meticulously coded using Visual Studio Code, by yours truly. </p> 
      <p className='my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-600 dark:text-emerald-50'>  Built with React.js and Tailwind CSS, deployed with Cloudflare.</p>

    </div>
    <div>
      
    </div>
    </>
  
  );
}

export default ContactForm;