// import danny from '../assets/danny.jpg'

// function Bio() {
//   return (
//     <div id='bio' className='max-w-[1040px] m-auto md:pl-20 p-4 pb-30 py-16 relative flex-column items-center justify-center h-auto w-full'>
//                   {/* <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300'>Bio</h1> */}
//         <div className='flex justify-center h-auto w-full p-10'>
//         <img src={danny} alt="" className='relative flex items-center justify-center h-auto w-full shadow-2xl shadow-gray-400 hover:transition-transform hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-md hover:shadow-gray-400 rounded-2xl group' style={{borderRadius:'50%', width:"300px", }}/>
//         </div>
//         <div>
//         <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>Hi there! I'm Leobardo, although most folks know me as Danny.</p>
//         <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>Back in 2022, I made the exciting decision to dive into the world of coding and web development through Tech Elevator. Since then, I've had the incredible opportunity to craft software solutions for diverse clients, including non-profits, artists, and small corporation.</p>
//         <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>These days, my primary focus revolves around creating user-friendly interfaces for our valued customers at Tech Impact. I'm particularly drawn to the intersection of design and engineering, where I strive to build software that not only looks good but also performs seamlessly behind the scenes.</p>
//         <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'> My tech stack includes a blend of frontend and backend technologies like React.js, Vue.js, Spring Boot, and UI/UX design tools such as Figma and Adobe XD. Leveraging languages like Java, HTML, CSS, and JavaScript, alongside frameworks like Bootstrap and Tailwind, and libraries for visualizations like Mapbox and Recharts.</p>
//         <p className='my-2 2xl:text-xl xsm:text-md font-bold text-stone-600 dark:text-emerald-50'>When I'm not at my computer, you'll often find me in my woodworking workshop, enjoying quality time with my wife and our furry companion Lilly, tackling various projects around the house, or watching anime.</p>
//         {/* <p className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>With my attention to detail, creativity, and communication I like to create responsive, and user-friendly application ideas. I am always interested in learning new languages and frameworks, improving my skills, and making contributions to society.</p> */}
//         </div>

//     </div>
//   )
// }

// export default Bio

import danny from '../assets/danny.jpg';

function Bio() {
  return (
    <div
      id='bio'
      className='max-w-[1040px] m-auto 2xl:mr-40 xl:mr-20 p-20 py-16 mt-20 relative flex flex-col items-center justify-center h-auto w-full bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] border border-[#FAEDCD] dark:border-[#144552] dark:from-[#4d194d] dark:to-[#006466] rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.3)]'
    >
      <div className='flex justify-center h-auto w-full p-10'>
        <img
          src={danny}
          alt="Danny's profile"
          className="
    rounded-full 
    shadow-[6px_-6px_15px_rgba(255,255,285,0.3),-12px_12px_25px_rgba(0,0,0,0.4)] 
    hover:shadow-[8px_-8px_25px_rgba(255,255,255,0.3),-14px_14px_25px_rgba(0,0,0,0.5)] 
    hover:scale-110 
    transition-transform 
    duration-300 
    ease-in-out
  "
          style={{ width: '300px' }}
        />
      </div>

      
      <div className='px-4'>
        <p className='my-4 2xl:text-xl xsm:text-md font-bold text-[#365438] dark:text-emerald-50 drop-shadow-[2px_2px_2px_#92aa68]'>
          Hi there! I'm <span className="text-indigo-600 dark:text-teal-400">Leobardo</span>, although most folks know me as Danny.
        </p>
        <p className='my-4 2xl:text-xl xsm:text-md font-bold text-stone-800 dark:text-emerald-50 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]'>
          Back in 2022, I made the exciting decision to dive into the world of coding and web development through Tech Elevator. Since then, I’ve had the incredible opportunity to craft software solutions for diverse clients.
        </p>
        <p className='my-4 2xl:text-xl xsm:text-md font-bold text-stone-800 dark:text-emerald-50 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]'>
          These days, I focus on creating user-friendly interfaces at Tech Impact, combining beautiful design with solid performance behind the scenes.
        </p>
        <p className='my-4 2xl:text-xl xsm:text-md font-bold text-stone-800 dark:text-emerald-50 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]'>
          My stack includes React.js, Vue.js, Spring Boot, Figma, Adobe XD, Java, HTML/CSS/JS, Bootstrap, Tailwind, Mapbox, and Recharts.
        </p>
        <p className='my-4 2xl:text-xl xsm:text-md font-bold text-stone-800 dark:text-emerald-50 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]'>
          Outside of work, I love woodworking, spending time with my wife and Lilly, doing house projects, or watching anime.
        </p>
      </div>
    </div>
  );
}

export default Bio;


