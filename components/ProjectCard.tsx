"use client";
import { Project } from "@/lib/projectHandler";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";


function ProjectCard({ item }: {item : Project}) {
  return (
    <Link href={`/projects/${item?.slug.current}`} className=" group cursor-pointer p-4 border flex flex-col  rounded-md lg:rounded-lg hover:bg-white dark:hover:bg-white/10">
      <div className=" overflow-hidden  rounded-md lg:rounded-lg flex-1">
        <img
          src={urlForImage(item.mainImage)}
          alt=""
          className=" group-hover:scale-105 h-full transform transition duration-150 ease-in  rounded-md lg:rounded-lg"
        />
      </div>
      <div className="">
      <p className=" text-lg pt-4 font-medium">{item?.title} </p>
      <div className=" flex items-center text-sm text-gray-500 justify-between">
        <div className=" text-xs border hidden sm:block border-black p-1.5 my-1 rounded-md">
          {item?.category}
        </div>

        <p>{new Date(item?.publishedAt).toDateString()}</p>
      </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
