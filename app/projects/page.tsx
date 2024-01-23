import NewsLetter from "@/components/NewsLetter";
import ProjectCard from "@/components/ProjectCard";
import { Project, orderProjectsbyCategory } from "@/lib/projectHandler";
import { client } from "@/sanityClient";
import { groq } from "next-sanity";
import Link from "next/link";

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const results = await client.fetch(groq`*[_type == 'projects']{
   
      slug ,
      publishedAt,
      _createdAt,
      mainImage,
      'category' : categories->title, title 
  }`);

  const searchstate = !!searchParams.category;

  const projectModified = searchstate
    ? await orderProjectsbyCategory(results)
    : new Map();


  return (
    <div className="p-8 flex flex-col">
      <h1 className=" text-4xl">Projects</h1>
      <div className=" flex flex-wrap gap-4 py-8">
        <Link
          href={`/projects`}
          className=" border hover:border-[#c0eb00] px-8 p-1 text-sm rounded-full"
        >
          All
        </Link>
        {results.map((item: Project, index: number) => (
          <Link
            key={index}
            href={`?category=${item.category}`}
            className=" border hover:border-[#c0eb00] px-8 p-1 text-sm rounded-full"
          >
            {item.category}
          </Link>
        ))}
      </div>
      <div className=" flex-1 lg:py-8">
        <div className=" grid-cols-1 gap-4 md:gap-6 lg:gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchstate
            ? projectModified
                .get(searchParams.category!)
                .projects.map((item: any, index: number) => (
                  <ProjectCard item={item} key={index} />
                ))
            : results?.map((item: Project, index: number) => (
                <ProjectCard item={item} key={index} />
              ))}
        </div>
      </div>
      <div className=" pt-8">
        <NewsLetter />
      </div>
    </div>
  );
}

export default page;
