import React from 'react'

type Props = {}

function NewsLetter({}: Props) {
  return (
    <section className="  bg-gradient-to-br flex items-center justify-between from-purple-500/10 to-yellow-500  dark:from-black p-8 lg:p-12 lg:max-w-6xl  rounded-lg">
        <div>
            <p className=' font-bold text-2xl'>Join <span className=' text-green-500 dark:text-[#c0eb00]'>500+</span> Readers</p>
            <p className=' text-gray-600 dark:text-gray-400 font-medium text-sm'>Receive weekly updates on Design and Productivity</p>
        </div>
        <div className=' bg-white dark:bg-black p-2 border rounded-md'>
          <input placeholder='Your email goes here :)' className=' p-2 px-6 rounded-l-md' />
          <button className=' text-white px-6 p-2 rounded-r-md bg-gradient-to-br from-green-500 to-green-600 dark:from-[#c0eb00]/50 dark:to-[#c0eb00]/50  hover:bg-yellow-500 '>Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter