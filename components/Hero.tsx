"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight-new";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="-mb-20 sm:pb-20  sm:pt-3 md:pt-7 lg:pt-10">
      <div>
        <Spotlight />
      </div>

      <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.3] bg-grid-black/[0.2] top-0 left-0 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Let's build digital experiences
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Turning ideas,concepts into sleek, interactive Experiences."
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gray-300 mt-4">
              Hey! I&apos;m Sharique, a passionate Full Stack developer based in
              India . Specialized in crafting captivating experiences that blend
              functionality with stunning aesthetics.
            </p>
            <Button
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
