import { Blog } from "@/app/blogs/page";
import { Project } from "@/lib/projectHandler";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";

type Props = {};

function BlogCard({ item }: {item : Blog}) {
  return (
    <Link href={`/blogs/${item.slug.current}`} className="flex flex-col md:flex-row md:space-x-4 items-center lg:space-x-7">
      
        <img
          src={urlForImage(item.mainImage)}
          alt=""
          className=" md:max-w-52 h-full object-cover mr-auto md:mr-0 rounded-md mx-0 lg:rounded-lg"
        />
      <div className=" pt-4  md:pt-0 mr-auto">
      <div className=" text-xs border hidden sm:block max-w-max dark:text-gray-400 border-black dark:border-gray-400 p-1.5  rounded-md">
        {item.postcategory}
      </div>
      <p className=" text-lg lg:text-xl py-4 font-medium">{item.title}</p>
      <div className=" flex items-center text-sm text-gray-500 justify-between">
        <p>{new Date(item.publishedAt).toLocaleString()} </p>
      </div>
      </div>
    </Link>
  );
}

export default BlogCard;
