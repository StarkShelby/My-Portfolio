import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { div } from "motion/react-client";
import { FaLocationArrow } from "react-icons/fa";

function Projects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-4xl font-bold text-center relative">
        Peek into my {""}
        <span className="text-[#E2CBFF]">Playground</span>
      </h1>
      <div className="flex flex-wrap  gap-x-24   justify-center relative">
        {projects.map(({ id, title, des, link, img, iconLists }) => (
          <div
            key={id}
            className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] h-[20vh] sm:h-[40vh]  mb-10 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src="/bg.png" alt="bg" className="" />
                </div>
                <img
                  src={img}
                  alt="img"
                  className="z-10 bottom-0 absolute object-cover overflow-hidden  "
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3 ">
                <div className="flex items-center ">
                  {iconLists.map((icon, index) => (
                    <div
                      className="border border-white/[0.2] rounded-full items-center justify-center flex"
                      key={icon}
                      //   style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className=" hidden md:block  lg:text-xl md:text-xs text-sm text-purple-300">
                    Check Live
                  </p>
                  <FaLocationArrow className="ms-3 " color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
