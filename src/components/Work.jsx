import WorkItem from './WorkItem'
import Resume from './Resume';

const data = [
  {
    id: 1,
    year: 2023,
    title: "Front-End/Data Visualizations Developer Fellow",
    company: "Tech Impact",
    duration: "1 Year Ongoing",
    details: [
      <ol className='list'> 
        <li>Lead and contribute to UI/UX design efforts by delivering wire frames, storyboards, prototypes, and mock-ups of data products. Translate UI/UX prototypes into code.</li>
        <li>Define and iterate through application designs, refining structural and aesthetic decisions based on user testing and client feedback.</li>
        <li>Author and document reusable code and libraries for routine processes.</li>
        <li>Define and ensure adherence to testing and validation standards across projects.</li>
        <li>Consult clients on best practices and decisions for enhancing their tools and developing new ones.</li>
        <li>Optimize applications for maximum speed, scalability, and accessibility.</li>
        <li>Collaborate with other members of Fellowship in the design, wire framing, and final build of production-grade data products.</li>
        <li>Oversee all technical aspects of implementing elements of graphic design into front-end interfaces.</li>
      </ol>

    
    ],
  },
  {
    id: 2,
    year: 2022,
    title: "Web Developer Advisor",
    company: "Freelancer",
    duration: "2 Years Ongoing",
    details: [
      <ol className='list'>
        <li>Specialize in the design, build and deployment of sophisticated websites tailored to the unique needs of clients.</li>
        <li>Expertly develop and sustain web applications, ensuring optimal performance and user experience.</li>
        <li>Engage in collaborative discussions with clients to ascertain website specifications, while offering expert technical advice and solutions.</li>
      </ol>
    
    ],
  },
  {
    id: 3,
    year: 2022,
    title: "Lead of Software Development",
    company: "Avi-IT",
    duration: "2 Years Ongoing Volunteering",
    details: [
      <ol className='list'>
        <li>Oversee all software-related aspects within Avi I.T., including the maintenance and enhancement of their website</li>
        <li>Lead Avi I.T.'s Software Development division, providing cost-effective solutions tailored to the needs of small businesses</li>
        <li>Implement cutting-edge software development applications and practices to improve efficiency and productivity</li>
        <li>Coordinate with the team to schedule and communicate upcoming system maintenance and updates, ensuring minimal disruption to operations</li>
        <li>Continually monitor and evaluate software performance, implementing improvements as necessary</li>
        <li>Foster a collaborative environment, encouraging knowledge sharing and team growth</li>
      </ol>
      
       
      
    ],
      
  },
 

 
];

const Work = () => {
  return (
    <div id='experience' 
    
    // className='max-w-[1040px] md:pl-20 m-auto p-4 py-16 z-100  bg-opacity-100'>
      className='max-w-[1040px] m-auto p-20 py-16 md:mr-40 relative flex flex-col items-center justify-center h-auto w-full bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] border border-[#FAEDCD] dark:border-[#144552] dark:from-[#4d194d] dark:to-[#006466] rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.3)]'
       >
      
        <h1 className='text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300 p-10 pb-20' >Experience</h1>
        { data.map((item, id) => (
            <WorkItem 
                key={id} 
                year={item.year} 
                title={item.title} 
                company={item.company}
                duration={item.duration} 
                details={item.details}
            />
        ))}
        <Resume />
    </div>
  )
}

export default Work

// import WorkItem from './WorkItem'
// import Resume from './Resume';

// const data = [
//   {
//     id: 1,
//     year: 2023,
//     title: "Front-End/Data Visualizations Developer Fellow",
//     company: "Tech Impact",
//     duration: "1 Year Ongoing",
//     details: (
//       <ol className="list-disc pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-100">
//         <li>Lead and contribute to UI/UX design efforts...</li>
//         <li>Define and iterate through application designs...</li>
//         <li>Author and document reusable code...</li>
//         <li>Ensure adherence to testing standards...</li>
//         <li>Consult clients on best practices...</li>
//         <li>Optimize applications for speed and accessibility...</li>
//         <li>Collaborate in designing and building data products...</li>
//         <li>Implement graphic design elements into UIs...</li>
//       </ol>
//     ),
//   },
//   {
//     id: 2,
//     year: 2022,
//     title: "Web Developer Advisor",
//     company: "Freelancer",
//     duration: "2 Years Ongoing",
//     details: (
//       <ol className="list-disc pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-100">
//         <li>Design, build, and deploy websites for diverse clients.</li>
//         <li>Maintain performance and user experience across apps.</li>
//         <li>Consult clients and propose custom web solutions.</li>
//       </ol>
//     ),
//   },
//   {
//     id: 3,
//     year: 2022,
//     title: "Lead of Software Development",
//     company: "Avi-IT",
//     duration: "2 Years Ongoing Volunteering",
//     details: (
//       <ol className="list-disc pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-100">
//         <li>Manage all software-related operations at Avi-IT.</li>
//         <li>Lead cost-effective software development for small businesses.</li>
//         <li>Introduce new development practices and tools.</li>
//         <li>Coordinate update rollouts and maintenance schedules.</li>
//         <li>Optimize performance and implement improvements.</li>
//         <li>Foster team collaboration and knowledge sharing.</li>
//       </ol>
//     ),
//   },
// ];

// const Work = () => {
//   return (
//     <div
//       id="experience"
//       className='max-w-[1040px] m-auto p-4 py-16 relative flex flex-col items-center justify-center h-auto w-full bg-gradient-to-tr from-[#D4A373] to-[#FEFAE0] border border-[#FAEDCD] dark:border-[#144552] dark:from-[#4d194d] dark:to-[#006466] rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.3)]'
//     >
//       <h1 className="text-4xl font-extrabold text-center text-[#001b5e] dark:text-gray-100 drop-shadow-md mb-12">
//         Experience
//       </h1>
//       {data.map((item, id) => (
//         <WorkItem
//           key={id}
//           year={item.year}
//           title={item.title}
//           company={item.company}
//           duration={item.duration}
//           details={item.details}
//         />
//       ))}
//       <Resume />
//     </div>
//   );
// };

// export default Work;