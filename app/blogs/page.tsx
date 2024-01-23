import BlogCard from "@/components/BlogCard";
import NewsLetter from "@/components/NewsLetter";
import { Project, orderProjectsbyCategory } from "@/lib/projectHandler";
import { client } from "@/sanityClient";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";

export interface Blog extends Project {
  postcategory : string
};

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const results = await client.fetch(groq`*[_type == 'post']{

    slug ,
    publishedAt,
    _createdAt,
    mainImage,
    'postcategory' : categories->title, title 
}`);

const searchstate = !!searchParams.category;

const projectModified = searchstate
  ? await orderProjectsbyCategory(results)
  : new Map();
  return (
    <div className="p-8">
      <h1 className=" text-4xl">Latest Blogs</h1>
      <div className=" flex flex-wrap gap-4 py-8">
        <Link
          href={`/blogs`}
          className=" border hover:border-[#c0eb00] px-8 p-1 text-sm rounded-full"
        >
          All
        </Link>
        {results.map((item: Blog, index: number) => (
          <Link
            key={index}
            href={`?category=${item.postcategory}`}
            className=" border hover:border-[#c0eb00] px-8 p-1 text-sm rounded-full"
          >
            {item.postcategory}
          </Link>
        ))}
      </div>
      <div className=" flex flex-wrap gap-4 py-8"></div>
      <div className=" grid-cols-1 gap-4 md:gap-6  grid md:grid-cols-2">
      {searchstate
            ? projectModified
                .get(searchParams.category!)
                .projects.map((item: any, index: number) => (
                  <BlogCard item={item} key={index} />
                ))
            : results?.map((item: Blog, index: number) => (
                <BlogCard item={item} key={index} />
              ))}
        
    
      </div>
      <div className=" pt-8">
        <NewsLetter />
      </div>
    </div>
  );
}

export default page;
