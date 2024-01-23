import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className="p-8 items-center ">
        <div className=' bg-white/10 w-full rounded-lg lg:my-8 flex flex-col-reverse lg:flex-row'>
            <div className=' flex-1 p-12 space-y-4'>
                <p className=' text-4xl'>Have a project in <span className=' text-[#c0eb00]'>mind?</span></p>
                <p className=' text-gray-500'>Please drop a message if you want to talk about a potential collaboration. I’m available for selected work.</p>
                <div className=' flex flex-col gap-4 xl:flex-row'>
                    <input className=' w-full px-4 py-2 bg-transparent border border-white/20 rounded-md' placeholder='Name' />
                    <input className=' w-full px-4 py-2 bg-transparent border border-white/20 rounded-md' placeholder='Email' />

                </div>
                <textarea rows={6} className=' w-full px-4 py-2 bg-transparent border border-white/20 rounded-md' placeholder='Message' />
                <button className=' bg-[#c0eb00] text-black w-full font-semibold py-2  rounded-lg'>Send Message</button>
            </div>
            <div>
                <img className=' max-h-80 h-full lg:max-h-full w-full object-cover lg:max-w-80 rounded-lg' src='https://framerusercontent.com/images/JIUXRpQbtqcIB4CdOAU060p8mMQ.jpg?scale-down-to=1024' />
            </div>

        </div>

    </div>
  )
}

export default page