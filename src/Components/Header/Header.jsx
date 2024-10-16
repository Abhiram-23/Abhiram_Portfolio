import React from "react";

const Header = () => {
  return (
    <div className="mx-3 py-1.5 font-display ">
      <nav className=" flex justify-between text-2xl p-1.5 ">
        <ul>
          <li className="cursor-pointer list-none">Home</li>
        </ul>
        <ul>
          <li className="cursor-pointer">About</li>
        </ul>
        <ul>
          <li className="cursor-pointer">Resume</li>
        </ul>
        <ul>
          <li className="cursor-pointer">Projects</li>
        </ul>
        <ul>
          <li className="cursor-pointer">Contact Me</li>
        </ul>
      </nav>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="my-6 px-5">
        <h1 className="flex flex-row justify-center text-3xl text-pink-300">
          Hello , I'm Abhiram
        </h1>
        <h1 className="flex flex-row justify-center text-3xl text-pink-300">
          Full Stack Developer 🔥 🚀
        </h1>
        <h1 className="flex flex-row justify-center text-3xl text-pink-300">
          Full Stack Developer with experience in MERN, Python
        </h1>
      </div>
      {/* need to add picture in this area */}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Header;
