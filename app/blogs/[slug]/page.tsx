import React from 'react'
import {components} from '@/app/projects/[slug]/page'
import { client } from '@/sanityClient'
import { groq } from 'next-sanity'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

async function page({params}:  { 
  params : { slug : string}
}) {const {slug} = params
const results = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`,{ slug })

return (
<div className=' p-8 max-w-6xl bg-gray-50 dark:bg-black rounded-lg'>
   <div style={{ backgroundImage : `url('${urlForImage(results.mainImage)}')`}} className=' rounded-md lg:rounded-lg'>
   <div className=" p-8  lg:p-12 lg:max-w-6xl  rounded-lg bg-gradient-to-t from-black via-black/50 ">
    <div className=" mx-auto lg:mx-0">
      <div
        className=" border-lime-500 dark:border-[#c0eb00] border bg-gray-100/10 flex items-center justify-between 
      space-x-2 rounded-md p-1 mx-auto lg:mx-0 text-light max-w-max  text-xs text-[#c0eb00] px-3"
      >
        <div className=" h-1.5 w-1.5 rounded-full bg-[#c0eb00]" />
        <p className="">{new Date(results.publishedAt).toLocaleString()}</p>
      </div>
      <h1 className=" text-4xl my-4  text-white font-semibold">
        {results.title}
      </h1>
    </div>
  </div>
   </div>
   <div className=' my-5 max-w-4xl lg: ml-4'>
    <PortableText value={results.body} components={components} />
   </div>
</div>
)
}

export default page