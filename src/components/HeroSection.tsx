"use client"; // this is a client component
import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fade-in animation-delay-2 py-16 sm:py-32 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/picture.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Binit!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Developer{" "}
            </span>
            based in Kathmandu, Nepal.
          </p>
          {/* @ts-ignore */}
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-sm shadow-sm hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>

          <a
            className="ml-4 text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded-sm shadow-sm hover:bg-purple-700 cursor-pointer"
            target="_blank"
            href="/resume.pdf"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        {/* @ts-ignore */}
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          {/* @ts-ignore */}
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
