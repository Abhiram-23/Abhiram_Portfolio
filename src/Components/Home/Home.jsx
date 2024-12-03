import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Abhiram from "../../assets/Images/Abhiram.png";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Developer",
      "Back-end Developer",
      "React Developer",
      "Full-Stack Developer",
      "Python Developer",
      "Problem Solver",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="mx-3" id="home">
      <div className="relative font-display flex flex-col justify-center items-center text-center text-white ">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
            Hello, I'm Abhiram
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">
            {text} <Cursor cursorStyle="|" />
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative  self-center ">
            <img
              src={Abhiram}
              alt="Abhiram Paidimarri"
              className="h-96 lg:h-96 md:h-64 sm:h-48 w-auto rounded-sm object-cover transform scale-105 items-center content-center justify-self-center self-center justify-items-center place-items-center"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 self-center pt-5">
            <div className=" text-xl antialiased text-white font-semibold leading-relaxed space-y-2 text-justify">
              <p>
                <span className="font-extrabold">Welcome to my portfolio!</span>{" "}
                I'm Abhiram Paidimarri, a software engineer pursuing a Master of
                Science in Informatics at the University of Louisiana at
                Lafayette, USA.
              </p>
              <p>
                I hold a Bachelor of Technology in Electronics & Computer
                Engineering from JB Institute of Engineering and Technology,
                Hyderabad, India. Professionally, I worked as an SDE1 at
                Valuebound Consulting, where I implemented an ERP system and
                integrated platforms like Dialpad and Twilio with the MindTickle
                Call AI, significantly boosting process efficiency and
                data-driven insights.
              </p>
              <p>
                I am passionate about using technology to solve real-world
                problems. Feel free to reach out via email at
                <a
                  href="mailto:abhipaidimarri23@gmail.com"
                  className="text-blue-600 underline"
                >
                  abhipaidimarri23@gmail.com
                </a>
                or connect on
                <a
                  href="https://www.linkedin.com/in/abhirampaidimarri/"
                  className="text-blue-600 underline"
                >
                  LinkedIn
                </a>
                . Thanks for visiting!
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Home;
