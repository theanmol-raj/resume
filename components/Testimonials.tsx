import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlForImage } from "@/sanity/lib/image";
import Profile from '@images/profile.jpg'
import Image from "next/image";

import React from "react";

type Props = {};

function CarouselCardCont({item}:any){
    return <div className=" border p-8 rounded-lg h-full flex flex-col bg-gradient-to-br from-purple-500/20 to-yellow-500/20 dark:from-black dark:to-white/10">
        <p className=" text-xs dark:text-gray-300 lg:text-sm font-medium flex-1 ">{item.testimonial}</p>
        <a href={item.linkedIn} className=" cursor-pointer flex py-4 space-x-2">
            <div>
                <Image src={urlForImage(item?.mainImage!)} alt="" width={50} height={50} unoptimized className="p-1 bg-white mx-auto dark:bg-white/20 rounded-full"  />
            </div>
            <div className=""><p className=" text-base">{item.user}</p>
            <p className=" text-xs text-gray-500">{item.designation}</p></div>
        </a>
    
    
    </div>
}


function Testimonials({data}: any) {
  return (
    <Carousel>
      <CarouselContent className=" max-w-sm space-x-2">
        {data.map((ietm:any ,index:number) => <CarouselItem key={index}><CarouselCardCont item={ietm} /></CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Testimonials;
