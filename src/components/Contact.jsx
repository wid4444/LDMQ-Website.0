
const Contact = () => {
  return (
    <div id='contact' className='max-w-[800px] md:pl-20 m-auto px-20 py-20 pb-20 xsm:px-5 flex-col justify-center'>
        <h1 className='py-4 text-4xl font-bold text-center  text-[#001b5e] dark:text-gray-300'>Contact</h1>
        <form action="https://getform.io/f/78dddc00-f83b-4531-b5cf-f8ea63ef1a54" method='POST' encType='multipart/form-data' className='flex flex-col justify-center'>
            {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'> */}
                <div className='flex flex-col py-2 z-10'>
                    <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-600 dark:border-gray-300 bg-gray-400 text-gray-100' type="text" name='name'/>
                </div>
                {/* <div className='flex flex-col'>
                    <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="text" name='phone'/>
                </div> */}
            {/* </div> */}
            <div className='flex flex-col py-2 z-10'>
                <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-600 dark:border-gray-300 bg-gray-400 text-gray-100'  type="email" name='email' />
            </div>
            {/* <div className='flex flex-col py-2'>
                <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div> */}
            <div className='flex flex-col py-2 z-10'>
                <label className='my-2 text-base font-normal text-stone-500 dark:text-emerald-50'>Message</label>
                <textarea className='border-2 rounded-lg p-3  border-gray-600 dark:border-gray-300 bg-gray-400 text-gray-100' rows="10" name="message"></textarea>
            </div>
            <div className='w-full flex justify-center z-10'>
            <button className='w-52 flex justify-center align-middle hover:ml-6 hover:transition-transform-border ease-in-out hover:-translate-y-1 hover:scale-125 text-xl text-[#001b5e] pt-10  py-3 border-solid  hover:border-b border-green-500 dark:border-emerald-500 shadow-sky-300  dark:text-green-500 dark:hover:text-gray-200 dark:shadow-gray-50'>
                Send Message
            </button>
            </div>
        </form>
    </div>
  )
}

export default Contact