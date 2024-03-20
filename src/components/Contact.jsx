// import React from 'react'
// import axios from "axios";
// import { useState } from "react";
// import Toast from "./Toast";



const Contact = ( ) => {

    // const [formStatus, setFormStatus] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState({
    //   name: "",
    //   email: "",
    //     message: "",
    //   platform: "",
    // //   file: ""
    // });
    // const [toastVisible, setToastVisible] = useState(false);
  
    // const handleFileChange = () => (e) => {
    //   setQuery((prevState) => ({
    //     ...prevState,
    //     files: e.target.files[0]
    //   }));
    // };
  
    // const handleChange = () => (e) => {
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   setQuery((prevState) => ({
    //     ...prevState,
    //     [name]: value
    //   }));
    // };
    
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (loading) return;
    //   setLoading(true);

    //   const formData = new FormData();
    //   Object.entries(query).forEach(([key, value]) => {
    //     formData.append(key, value);
    //   });

      
  
    //   axios
    //     .post(
    //       "https://getform.io/f/78dddc00-f83b-4531-b5cf-f8ea63ef1a54",
    //     //   "https://formsubmit.co/ldmartinezquiroz@gmail.com",
    //       formData,
    //       { headers: { Accept: "application/json" } }
    //     )
    //     .then(function (response) {
    //       setFormStatus(true);
    //       setQuery({
    //         name: "",
    //         email: "",
    //         message: ""
    //       });
    //       setLoading(false);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       setLoading(false);
    //     });

    // setToastVisible(true);
      

    // };

    // const handleToastClose = () => {
    //     console.log('Closing toast'); // Add this line
    //     setToastVisible(false);
    //   };

//   return (
//     <div id='contact' className='max-w-[800px] md:pl-20 m-auto px-20 py-20 pb-20 xsm:px-5 flex-col justify-center'>
//         <h1 className='py-4 text-4xl font-bold text-center  text-[#001b5e] dark:text-gray-300'>Contact</h1>

//         <form encType='multipart/form-data' onSubmit={handleSubmit} className='flex flex-col justify-center'>
            
//                 <div className='flex flex-col py-2 z-10'>
//                     <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Name</label>
//                     <input className='border-2 rounded-lg p-3 flex border-gray-600 dark:border-gray-300 bg-blue-50 text-gray-100' type="text" name='name' 
//                     // placeholder="Full name"
//               value={query.name}
//               onChange={handleChange()}/>
//                 </div>
               
//             <div className='flex flex-col py-2 z-10'>
//                 <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Email</label>
//                 <input className='border-2 rounded-lg p-3 flex border-gray-600 dark:border-gray-300 bg-blue-50 text-gray-100'  type="email" name='email' 
//                 // placeholder="Email"
//               value={query.email}
//               onChange={handleChange()}/>
//             </div>
            
//             <div className='flex flex-col py-2 z-10'>
//                 <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Message</label>
//                 <textarea className='border-2 rounded-lg p-3  border-gray-600 dark:border-gray-300 bg-blue-50 text-gray-800' rows="10" name="message" value={query.message} onChange={handleChange()}></textarea>
//             </div>

//             <div className='w-full flex justify-center z-10'>
//             <button className='w-52 flex justify-center align-middle hover:ml-6 hover:transition-transform-border ease-in-out hover:-translate-y-1 hover:scale-125 text-xl text-[#001b5e] pt-10  py-3 border-solid  hover:border-b border-green-500 dark:border-emerald-500 shadow-sky-300  dark:text-green-500 dark:hover:text-gray-200 dark:shadow-gray-50' type="submit">
//                 Send Message
//             </button>
//             <Toast
//         message="Message sent!"
//         isVisible={toastVisible}
//         onClose={handleToastClose}
//       />
    
//             </div>

//         </form>




//     </div>
//   )
}

export default Contact