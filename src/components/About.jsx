import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#143447] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ashish Gupta. Have a look around!</p>
          </div>
          <div>
            <p>
              "As a Full Stack Developer, I thrive in the dynamic realm of
              technology, proficiently navigating both the front-end and
              back-end landscapes. With a keen eye for user experience, I design
              intuitive interfaces, while also optimizing server-side
              functionality for a seamless blend. My code is not just lines but
              a symphony of innovation, combining creativity and efficiency. I
              am dedicated to continuous learning, adapting to evolving
              technologies to stay at the forefront of web development. From
              pixels to databases, I architect comprehensive solutions that
              bring ideas to life."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
