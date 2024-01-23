"use client";

import React, { useCallback, useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  BarChart3,
  Bot,
  Boxes,
  Compass,
  Contact,
  Home,
  LayoutDashboard,
  LayoutList,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
  UserRound,
} from "lucide-react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

// type Props = {};

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init)
    return (
      <Particles
        className=" z-0"
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={{
          background: {},
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              // resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#c0efff",
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 10,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          // detectRetina: true,
        }}
      />
    );
};

function UiProvider({ children, ...props }: ThemeProviderProps) {
  const [screen, setScreen] = useState<boolean>(false);

  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      disableTransitionOnChange
      {...props}
    >
      <div className=" flex dark:bg-[#09090b] ">
        <Sidebar screenSet={setScreen}>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<Compass size={20} />} text="Projects" />
          <SidebarItem icon={ <UserRound size={20} />} text="About" />
          <SidebarItem icon={ <LayoutList size={20} />} text="Blogs" alert />
          {/* <SidebarItem icon={ <Contact size={20} />} text="Contact" alert /> */}
        </Sidebar>
        <div
          className={` w-full md:w-0 md:flex-1 p-3 lg:p-8 bg-wallpaper ${
            !screen && "hidden md:block"
          }`}
        >
          <ParticlesContainer />
          {children}
          <div className=" flex items-center justify-between pt-12">
            <div className=" text-gray-800 dark:text-gray-300 text-sm">
              Made by{" "}
              <span className=" dark:text-[#c0eb00] underline text-green-500 tracking-widest">
                @anmolraj
              </span>{" "}
              on{" "}
              <span className=" dark:text-[#c0eb00] underline text-green-500 tracking-widest">
                @NextJS
              </span>
            </div>
            <p className=" text-xs text-gray-600 dark:text-gray-400">
              © 2022 - {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </NextThemesProvider>
  );
}

export default UiProvider;
