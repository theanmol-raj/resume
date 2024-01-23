import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { groq } from 'next-sanity'
import React from 'react'

export const components : PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => (
      <h1 className="text-3xl my-3 font-bold">{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className="text-2xl my-5 font-semibold">{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className="text-xl my-5 font-medium">{children}</h3>
    ),
    h4: ({children}) => (
      <h4 className="text-lg my-5 font-normal">{children}</h4>
    ),
    normal: ({children}) => (
      <p className="  my-5 dark:text-gray-300 ">{children}</p>
    ),
    blockquote: ({children} ) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children} ) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children}:{children : React.ReactNode}) => <em className="text-gray-600 font-semibold">{children}</em>,
    
    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children} :any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target}>
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({value} : { value : { imageUrl : string}}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline} : { value : { url : string , text : string } , isInline : boolean}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

}

async function page({params}:  { 
    params : { slug : string}
}) {
    const {slug} = params
    const results = await client.fetch(groq`*[_type == "projects" && slug.current == $slug][0]`,{ slug })

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
          <div className=" max-w-lg grid md:grid-cols-2 py-4 gap-4">
            <a href={results.link} className=" text-center border py-2 bg-[#c0eb00] text-white dark:text-black font-medium rounded-md md:rounded-lg ">
              See the Project
            </a>
            <a href={results.code} className=" text-center border py-2 rounded-md md:rounded-lg font-medium hover:bg-white text-white hover:text-black dark:hover:bg-white ">
              Code
            </a>
          </div>
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