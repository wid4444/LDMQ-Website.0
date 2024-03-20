
import TechStack, { LinkedIn, GitHub } from './TechStack';

function ContactForm() {
 

  

  return (
    <>
    <div id='contact' className='max-w-[800px] md:pl-20 m-auto px-20 py-20 pb-20 xsm:px-5 flex-col justify-center text-center'>


      <p className='my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-500 dark:text-emerald-50'>This was thoughtfully designed and meticulously coded using Visual Studio Code, by yours truly. </p> 
      <p className='my-2 pl-5 2xl:text-md xsm:text-sm font-bold text-stone-500 dark:text-emerald-50'>  Built with React.js and Tailwind CSS, deployed with Cloudflare.</p>
      <br/>
      <p className='my-2 pl-5 2xl:text-base xsm:text-sm font-bold text-stone-500 dark:text-emerald-50'>Get in touch → <span className='email'>ldmq4444@gmail.com</span> </p>
      <TechStack 
      LinkedIn={LinkedIn}
      GitHub={GitHub}
      />
    </div>
    <div>
      
    </div>
    </>
  
  );
}

export default ContactForm;