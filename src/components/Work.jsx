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

      // "- Lead and contribute to UI/UX design efforts by delivering wire frames, storyboards, prototypes, and mock-ups of data products. Translate UI/UX prototypes into code.",
      // <br />,
      // "- Define and iterate through application designs, refining structural and aesthetic decisions based on user testing and client feedback.",
      // <br />,
      // "- Author and document reusable code and libraries for routine processes.",
      // <br />,
      // "- Define and ensure adherence to testing and validation standards across projects.",
      // <br />,
      // "- Consult clients on best practices and decisions for enhancing their tools and developing new ones.",
      // <br />,
      // "- Optimize applications for maximum speed, scalability, and accessibility.",
      // <br />,
      // "- Collaborate with other members of Fellowship in the design, wire framing, and final build of production-grade data products.",
      // <br />,
      // "- Oversee all technical aspects of implementing elements of graphic design into front-end interfaces.",
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
      // "- Specialize in the design, build and deployment of sophisticated websites tailored to the unique needs of clients.",
      // <br />,
      // "- Expertly develop and sustain web applications, ensuring optimal performance and user experience.",
      // <br />,
      // "- Engage in collaborative discussions with clients to ascertain website specifications, while offering expert technical advice and solutions.",
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
      
        // "- Oversee all software-related aspects within Avi I.T., including the maintenance and enhancement of their website.",
        // <br />,
        // "- Lead Avi I.T.'s Software Development division, providing cost-effective solutions tailored to the needs of small businesses.",
        // <br />,
        // "- Implement cutting-edge software development applications and practices to improve efficiency and productivity.",
        // <br />,
        // "- Coordinate with the team to schedule and communicate upcoming system maintenance and updates, ensuring minimal disruption to operations.",
        // <br />,
        // "- Continually monitor and evaluate software performance, implementing improvements as necessary.",
        // <br />,
        // "- Foster a collaborative environment, encouraging knowledge sharing and team growth."
      
    ],
      
  },
 

  // {
  //     year: 2024,
  //     title: 'Software Developer',
  //     duration: '2 Years',
  //     details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s'
  // },
];

const Work = () => {
  return (
    <div id='experience' className='max-w-[1040px] md:pl-20 m-auto p-4 py-16 z-100  bg-opacity-100'>
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