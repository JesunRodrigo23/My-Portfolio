import { Download } from "lucide-react";
import React from "react";
import hero from "../assets/Image1.jpg"; // adjust path if needed

const HeroSection = () => {
  return (

    <section className="relative w-full" data-aos="zoom-in-up">
      {/* background blobs */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start overflow-hidden">
        <div className="h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-40"></div>
        <div className="h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-40 blur-2xl"></div>
      </div>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 max-w-5xl md:max-w-3xl lg:max-w-none mx-auto">

          {/* LEFT CONTENT */}
          <div className="p-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                  Jesun A Full Stack Developer
                </span>{" "}
                👋
              </h1>
            </div>

            <p className="text-gray-300 pt-8 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              BSIT student with hands-on experience in full-stack web and mobile application development using
              React Native Expo, TypeScript, React, and Tailwind CSS. Skilled in responsive design, UI/UX
              implementation, and collaborative software development through internship and academic projects.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0">

              {/* Hire Me */}
              <button className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                <span className="absolute inset-0 rounded-full bg-primary group-hover:scale-105 transition-all"></span>
                <span className="relative text-white font-medium">
                  Hire Me
                </span>
              </button>

              {/* Download */}
              <button className="border border-cyan-400 px-6 md:px-7 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-max hover:scale-105 transition-all">
                <Download size={18} className="text-cyan-400" />
                <a href="./resume.pdf" download className="text-cyan-400">
                  Download Resume
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:h-full md:flex">
            <div className="relative w-full h-96 lg:h-full flex items-center justify-center">

              {/* glow */}
              <div className="absolute w-5/6 h-[80%] bg-gradient-to-r from-[#0c64ac] to-cyan-400 opacity-20 blur-2xl"></div>

              {/* image */}
              <div className="relative z-10 p-2">
                <img
                  src={hero}
                  alt="Hero"
                  width="500"
                  height="auto"
                  loading='lazy'
                  className='w-full h-full object-cover rounded-[30%_70%_70%_30%_30%_70%_70%]
                  object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;