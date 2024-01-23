"use client";
import { ArrowBigLeftDash, Instagram, Twitter, Youtube } from "lucide-react";
import { useContext, createContext, useState } from "react";
import Image from "next/image";
import Logo from '@images/logo.png'
import Link from "next/link";
import ModeToggle from "./DarkModeShift";


const SidebarContext = createContext<boolean>(true);

export default function Sidebar({ children ,screenSet }: { children: React.ReactNode , screenSet : (x : boolean) => void }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className=" flex  relative">
      <aside className={`h-screen  md:hidden bg-[#09090b]   ${expanded && 'w-screen'}  top-0  " border-r`}>
      <nav className="h-full flex flex-col shadow-sm">
        <div className={`${ expanded &&  "p-4 pb-2 flex justify-between items-center"}`}>
          {expanded && <div className="flex items-center">
            <Image className={`${expanded && 'rotate-[306deg]'}`} alt="" width={40} height={40} src={Logo.src} />
             <h1 className="text-white">Anmol Raj</h1>
          </div>}
          
          <button
            onClick={() => {setExpanded((curr) => !curr); screenSet(expanded) }}
            className="p-1.5 rounded-lg fixed top-4 right-4 bg-gray-900 hover:bg-gray-700 text-white mb-8"
          >
            {expanded ? <ArrowBigLeftDash /> : <Image className={`${expanded && ' duration-500 rotate-[306deg]'}`} alt="" width={30} height={30} src={Logo.src} />}
          </button>
        </div>

        {expanded && <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>}

        {expanded && <div className={` flex ${expanded ? ' flex-row space-x-4 mx-4' : ' flex-col mx-auto space-y-4'}  mb-8 `}>
            <Link className=" hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Instagram /></Link>
            <Link className=" hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Twitter /></Link>
            <Link className=" hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Youtube /></Link>
            <ModeToggle /> 
        </div>}

      </nav>
    </aside>

    <aside className={`h-screen hidden md:block  bg-[#09090b] sticky  ${expanded && 'w-full'} md:max-w-max top-0 border-r`}>
      <nav className="h-full flex flex-col shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {expanded && <div className="flex items-center">
            <Image className={`${expanded && 'rotate-[306deg]'}`} alt="" width={40} height={40} src={Logo.src} />
             <h1 className="text-white">Anmol Raj</h1>
          </div>}
          
          <button
            onClick={() => {setExpanded((curr) => !curr); screenSet(expanded) }}
            className="p-1.5 rounded-lg bg-gray-900 hover:bg-gray-700 text-white mb-8"
          >
            {expanded ? <ArrowBigLeftDash /> : <Image className={`${expanded && ' duration-500 rotate-[306deg]'}`} alt="" width={30} height={30} src={Logo.src} />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className={` flex ${expanded ? ' flex-row space-x-4 mx-4' : ' flex-col mx-auto space-y-4'}  mb-8 `}>
            <Link className=" text-white hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Instagram /></Link>
            <Link className=" text-white hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Twitter /></Link>
            <Link className=" text-white hover:bg-[#c0eb00] hover:text-black p-2 rounded-full" href={'/'}><Youtube /></Link>
            <ModeToggle /> 
        </div>

      </nav>
    </aside>       
    </div>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
}: {
  icon: any;
  text: string;
  active?: boolean;
  alert?: boolean;
}) {
  const expanded = useContext(SidebarContext);
  const path = text.toLowerCase() === 'home' ? '' : text.toLowerCase();
  return (
    <Link prefetch={false} href={`/${path}`}
      className={`
        relative flex items-center py-2 px-3 my-1
         font-light rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-[#c0eb00] text-black "
            : "hover:bg-gray-500/50 text-white/80 "
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all text-sm ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-[#c0eb00] ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className="
          absolute z-20 left-full rounded-md px-2 py-1 ml-6
          bg-yellow-100 text-black text-sm
            -translate-x-3 transition-all invisible opacity-0
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0          
      "
        >
          {text}
        </div>
      )}
    </Link>
  );
}
