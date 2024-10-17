import React, { useEffect, useState } from "react";

const Header = () => {
  const [hidden, sethidden] = useState("");
  const btnClicked = () => {
    if (hidden === "") {
      sethidden("hidden");
    } else {
      sethidden("");
    }
  };
  const a = "w-full flex-grow lg:flex items-center lg:w-auto" + hidden;
  return (
    <div className="py-4 px-2 lg:mx-4 xl:mx-12">
      <div>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="block lg:hidden">
            <button
              onClick={btnClicked}
              className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {hidden ? (
            <></>
          ) : (
            <div id="main-nav" className={a}>
              <div className="text-xl lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold text-orange-300 sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  HOME
                </a>
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  About
                </a>
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Resume
                </a>
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Experience
                </a>
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Projects
                </a>
                <a
                  href="#home"
                  className="block lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
