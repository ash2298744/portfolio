import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#143447] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ashish Gupta
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0]">
          Architecting seamless digital experiences from user interface to
          server-side functionality, I am a Software Developer passionate
          about crafting versatile and robust solutions.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <Link className="group-hover:rotate-90 duration-300" to="work" smooth={true} duration={500}>
                <span >
                <HiArrowNarrowRight className="ml-3" />
                </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
