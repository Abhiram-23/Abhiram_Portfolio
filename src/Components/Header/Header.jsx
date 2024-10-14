import React from "react";

const Header = () => {
  return (
    <div className="mx-3">
      <nav className=" flex justify-between font-display text-xl p-1.5 ">
        <ul>
          <li className="cursor-pointer">Home</li>
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
    </div>
  );
};

export default Header;
