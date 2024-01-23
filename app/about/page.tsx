/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Profile from "@images/profile.jpg";
import { BookOpen, Briefcase, Layers, Slack } from "lucide-react";
import P from '@images/webdnd.jpg'
import Stack from "@/components/Stack";

type SerA ={
  image? : string,
  service : string ,
  description : string
}

type ExpA ={
  start : string ,
  end? : string ,
  company : string,
  position : string ,
  type: string ,
  description : string
}

const serviceArr : SerA[] = [
  {
    service: "Custom Machine Learning Solutions",
    description: "Develop predictive models, recommendation systems, or other data-driven applications tailored to specific industry needs.",
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/10/Custom-Machine-Learning-Development-Services.jpg?tx=w_3840,q_auto'
  },
  {
    service: "Software Development Services",
    description: "Offer end-to-end software development services, including design, development, and deployment of applications.",
    image: 'https://savvycomsoftware.com/wp-content/uploads/2020/12/software-development-services-20.jpg'
  },
  {
    service: "Web Development and Design",
    description: "Create visually appealing and functional websites using React.Js, Next.Js, and Express.Js for responsive and dynamic web applications.",
    image: P.src
  },
  {
    service: "Data Visualization and Analytics",
    description: "Provide data visualization and analytics services using Tableau and Excel to create interactive dashboards and reports for informed decision-making.",
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20200511174836/Data-Visualisation-vs-Data-Analytics.png'
  },
  {
    service: "Technical Mentoring and Training",
    description: "Offer mentoring and training services in machine learning, Tensorflow, Python, React.Js, and Next.Js to help professionals upskill.",
    image: 'https://news.stonybrook.edu/wp-content/uploads/2021/08/Mentoring-Graphics-1.png'
  },
  {
    service: "Full-Stack Development",
    description: "Combine backend (Express.Js) and frontend (React.Js, Next.Js) development for comprehensive solutions integrating databases, APIs, and user interfaces.",
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png'
  }
];

const experienceArr : ExpA[] = [
  {
    start : 'June 2022',
    company : 'Grarri Private Limited, Hyderabad',
    description :'Involved in conducting research, testing with users, ideating, creating plans, and shaping polished user experiences and interfaces for iOS, Android, and Web platforms. Collaborating intimately with developers, product managers, and key stakeholders. Crafting experiences that are driven by data and focused on the end user.',
    position : 'UX/UI Designer' ,
    type : 'Full-time' ,
  },
  {
    start : 'June 2022',
    company : 'Mongoosh Design Studio, Noida',
    description :'Involved in conducting research, user testing, ideation, creating outlines, and developing polished user experiences and interfaces for iOS, Android, and the Web. Collaborating closely with engineers, product managers, and key staff. Crafting experiences that are driven by data and focus on the user.',
    position : 'UX/UI Designer' ,
    type : 'Full-time' ,
    end : 'June 2022'
  }

]

const educationArr : ExpA[] = [
  {
    start : 'September 2020',
    company : 'KL University, Hyderabad',
    description :'Data Science Specialization',
    position : 'Btech - Artificial Intelligence & Data Science' ,
    type : 'CGPA : 8.02' ,
    end: ' April 2024'
  },
  {
    start : 'June 2018',
    company : 'Jusco School South Park , Jamshedpur',
    description :'Pure Science with Computer Science',
    position : 'UX/UI Designer' ,
    type : 'Percentage : 85 %' ,
    end : 'June 2020'
  }

]




function page() {
  return (
    <div className=" p-8 space-y-5">
      <div className=" bg-gradient-to-br grid grid-cols-1 gap-4 lg:grid-cols-2 from-purple-500 to-yellow-500 dark:from-black p-8  lg:p-12  mx-auto rounded-lg">
        <div className=" ">
          <h1 className=" bg-gradient-to-r from-[#c0eb00] to-yellow-500 font-bold text-4xl bg-clip-text text-transparent">
            Anmol Raj
          </h1>
          <h1 className=" text-xl mb-4 text-white tracking-tighter">
            Software Developer & <br />
            Machine Learning Engineer
          </h1>
          <div className=" space-y-2">
            <p className=" lg:text-sm text-gray-200 dark:text-gray-400 text-xs max-w-lg">{`I'm a passionate Machine Learning Engineer and Software Developer dedicated to crafting innovative solutions at the intersection of data and technology. With a robust background in both machine learning and software development, I thrive on turning complex challenges into elegant, functional, and scalable solutions.`}</p>
            <p className=" lg:text-sm text-gray-200 dark:text-gray-400 text-xs max-w-lg">{`Throughout my journey, I've had the privilege of working on diverse projects that blend cutting-edge technologies and creative problem-solving. From developing efficient software applications to harnessing the power of machine learning for data-driven insights, my goal is to create impactful solutions that transcend expectations.`}</p>
            <p className=" lg:text-sm text-gray-200 dark:text-gray-400 text-xs max-w-lg">{`Explore my portfolio to discover the projects that showcase my commitment to excellence and my enthusiasm for pushing the boundaries of what's possible. I invite you to join me on this exciting journey where data meets code, and possibilities are limitless.`}</p>
            <p className=" lg:text-sm text-gray-200 dark:text-gray-400 text-xs max-w-lg">{`Here's a fun fact: I prefer tea to coffee ☕`}</p>
          </div>
          <div className=" max-w-lg grid md:grid-cols-2 py-4 gap-4">
            <button className=" border py-2 bg-[#c0eb00] text-white dark:text-black font-medium rounded-md md:rounded-lg ">
              Contact Me
            </button>
            <button className=" border py-2 rounded-md md:rounded-lg font-medium hover:bg-white text-white hover:text-black dark:hover:bg-gray-900 ">
              Email
            </button>
          </div>
        </div>
        <div className=" row-start-1 lg:col-start-2 flex items-center">
          <Image
            src={Profile.src}
            alt=""
            width={400}
            height={400}
            unoptimized
            className="p-2 bg-white my-auto mx-auto dark:bg-white/20 rounded-full"
          />
        </div>
      </div>
      <section className="  bg-gradient-to-tr from-purple-500/20 to-yellow-100 dark:from-black p-8 lg:p-12  rounded-lg">
        <h3 className=" text-xl lg:text-3xl flex items-center ">Services<Slack className=" ml-1 text-[#c0eb00]" /></h3>
        <div className=" flex flex-wrap py-4 gap-8  ">
            {serviceArr.map((item :SerA , index : number) => <div className=" space-y-2 max-w-80" key={index}>
                <img src={item.image} alt="" className=" rounded-md md:rounded-lg w-full" />
                <p className=" tracking-wider font-semibold uppercase text-lg">{item.service}</p>
                <p className=" text-gray-800 dark:text-gray-400 text-sm">{item.description}</p>
            </div>)}
        </div>
      </section>

      <section className=" bg-black/5 dark:bg-black p-8 lg:p-12 rounded-lg">
        <h3 className=" text-xl lg:text-3xl flex items-center ">Experience <Briefcase className=" text-[#c0eb00] ml-1" /></h3>
        <div className=" grid grid-cols-1 py-4 gap-6 pt-8">
            {experienceArr.map((item : ExpA ,index : number) => <div className=" flex items-start space-x-6" key={index}>
                      <p className=" text-sm text-gray-600 w-full max-w-52 text-right">{!!item.end ? `${item.start} - ${item.end}` :`${item.start} - Present`}</p>
                      <div className=" space-y-1">
                        <p className=" font-medium text-[#c0eb00]">{item.company}</p>
                        <p className=" text-sm"><span>{item.position}</span> | <span>{item.type}</span></p>
                        <p className=" text-xs text-gray-600">{item.description}</p>
                      </div>
            </div>)}           
        </div>
      </section>
      <section className=" bg-black/5 dark:bg-black p-8 lg:p-12 rounded-lg">
        <h3 className=" text-xl lg:text-3xl flex items-center ">Education <BookOpen className=" text-[#c0eb00] ml-1" /></h3>
        <div className=" grid grid-cols-1 py-4 gap-6 pt-8">
            {educationArr.map((item : ExpA ,index : number) => <div className=" space-x-6 flex items-start" key={index}>
                      <p className=" text-sm text-gray-600 w-full max-w-52 text-right">{!!item.end ? `${item.start} - ${item.end}` :`${item.start} - Present`}</p>
                      <div className=" space-y-1">
                        <p className=" font-medium text-[#c0eb00]">{item.company}</p>
                        <p className=" text-sm"><span>{item.position}</span> | <span>{item.type}</span></p>
                        <p className=" text-xs text-gray-600">{item.description}</p>
                      </div>
            </div>)}           
        </div>
      </section>
      <section className=" bg-black/5 dark:bg-black p-8 lg:p-12   rounded-lg">
        <h3 className=" text-xl lg:text-3xl pb-8 flex items-center ">
          Stack <Layers className=" mr-2 text-[#c0eb00]" />
        </h3>
        <Stack  />
      </section>
    </div>
  );
}

export default page;
