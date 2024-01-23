import Image from 'next/image'
import React from 'react'

import { urlForImage } from '@/sanity/lib/image'
import { client } from '@/sanityClient'
import { groq } from 'next-sanity'

type Props = {}

function StackItem({item} : any){
    return (<div className=" flex p-4 rounded-md bg-white dark:bg-black border space-x-2 ">
    <div>
        <Image src={urlForImage(item?.mainImage)} alt="" width={50} height={50} unoptimized className="rounded-md bg-white dark:bg-black"  />
    </div>
    <div className=""><p className=" text-base font-semibold">{item.skill}</p>
    <p className=" text-xs text-gray-500">{item?.description}</p></div>
</div>)
}



async function Stack() {

  const data = await client.fetch(groq`*[_type == 'stack']`)

  return (
    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.map((item:any  ,index : number) => <StackItem key={index} item={item} /> )}
        
        


    </div>
  )
}

export default Stack