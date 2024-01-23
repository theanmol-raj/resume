import Image from "next/image";
import Profile from "@images/profile.jpg";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { Layers, Quote } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import StackCategory from "@/components/Stack";
import NewsLetter from "@/components/NewsLetter";
import { client } from "@/sanityClient";
import { groq } from "next-sanity";
import { Project } from "@/lib/projectHandler";
import { Blog } from "./blogs/page";
import Stack from "@/components/Stack";

export default async function Home() {
  const results = await client.fetch(groq`{ 'projects' : *[_type == 'projects'][0..4]{
    slug ,
    publishedAt,
    _createdAt,
    mainImage,
    'category' : categories->title, title 
} ,
'blogs' : *[_type == 'post'][0..6]{

  slug ,
  publishedAt,
  _createdAt,
  mainImage,
  'postcategory' : categories->title, title 
},
'recommendations' : *[_type == 'testimonials'],
}`);



  return (
    <main className="space-y-8 w-full">
      <div className=" bg-gradient-to-br grid grid-cols-1 gap-4 lg:grid-cols-2 from-purple-500 to-yellow-500 dark:from-black p-8  lg:p-12 lg:max-w-6xl  rounded-lg">
        <div className=" mx-auto lg:mx-0">
          <div
            className=" border-lime-500 dark:border-[#c0eb00] border bg-gray-100/10 flex items-center justify-between 
          space-x-2 rounded-md p-1 mx-auto lg:mx-0 text-light max-w-max  text-xs text-[#c0eb00] px-3"
          >
            <div className=" h-1.5 w-1.5 rounded-full bg-[#c0eb00]" />
            <p className="">Available for new Projects</p>
          </div>
          <h1 className=" text-4xl my-4 hidden  lg:block text-white font-semibold">
            Software Developer{" "}
            <span className=" text-gray-300 dark:text-gray-500 font-extralight">
              {" "}
              &{" "}
            </span>{" "}
            Machine Learning Engineer
          </h1>
          <h1 className=" text-xl my-4 text-white lg:hidden tracking-tighter">
            Software Developer{" "}
            <span className=" text-gray-300 dark:text-gray-500 font-extralight">
              {" "}
              &{" "}
            </span>{" "}
            Machine Learning Engineer
          </h1>
          <p className=" lg:text-sm text-gray-200 dark:text-gray-400 text-xs max-w-lg">{`I specialize in creating innovative solutions that blend cutting-edge technology and creative problem-solving. Explore my portfolio to see how I turn complex challenges into elegant, functional, and scalable solutions. Let's embark on this exciting journey where data meets code. Happy browsing! `}</p>
          <div className=" max-w-lg grid md:grid-cols-2 py-4 gap-4">
            <button className=" border py-2 bg-[#c0eb00] text-white dark:text-black font-medium rounded-md md:rounded-lg ">
              Contact Me
            </button>
            <button className=" border py-2 rounded-md md:rounded-lg font-medium hover:bg-white text-white hover:text-black dark:hover:bg-gray-900 ">
              Projects
            </button>
          </div>
        </div>
        <div className=" row-start-1 lg:col-start-2">
          <Image
            src={Profile.src}
            alt=""
            width={300}
            height={300}
            unoptimized
            className="p-2 bg-white mx-auto dark:bg-white/20 rounded-full"
          />
        </div>
      </div>
      <section className="  bg-gradient-to-tr from-white to-gray-100 dark:from-black p-8 lg:p-12 lg:max-w-6xl  rounded-lg">
        <h3 className=" text-xl lg:text-3xl ">Recent Work </h3>
        <div className=" grid lg:grid-cols-2 py-4 gap-4">
          {results?.projects.map((item: Project, index: number) => (<ProjectCard item={item} key={index} />))}
        </div>
      </section>
      <section className="  bg-gradient-to-br from-white to-white  dark:from-black p-8 lg:p-12 lg:max-w-6xl  rounded-lg">
        <h3 className=" text-xl lg:text-3xl pb-8 ">Latest blogs</h3>
        {results?.blogs.map((item: Blog, index: number) => (
                <BlogCard item={item} key={index} />
              ))}
      </section>
      <section className="  bg-gradient-to-tr from-white to-white  dark:from-black p-8 lg:p-12 lg:max-w-6xl  rounded-lg">
        <h3 className=" text-xl lg:text-3xl pb-8 flex items-center space-x-2">
          {" "}
          Recommendation <Quote className=" mr-2 text-[#c0eb00]" />
        </h3>
        <Testimonials data ={ results?.recommendations} />
      </section>
      <section className="  bg-gradient-to-br from-white to-white  dark:from-black p-8 lg:p-12 lg:max-w-6xl  rounded-lg">
        <h3 className=" text-xl lg:text-3xl pb-8 flex items-center ">
          Stack <Layers className=" mr-2 text-[#c0eb00]" />
        </h3>
        <div className="">
          <Stack  />
        </div>
      </section>

      <NewsLetter />
    </main>
  );
}
