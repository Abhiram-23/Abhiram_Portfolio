// import React from "react";
// import Abhiram from "../../assets/Images/Abhiram.png";

// const Home = () => {
//   return (
//     <div className="mx-3">
//       <div className="relative font-display flex flex-col justify-center items-center text-center text-white">
//         <div className="mb-10">
//           <h1 className="text-5xl font-extrabold mt-2">Hello , I'm Abhiram</h1>
//           <h1 className="text-5xl font-extrabold mt-2">
//             🔥 🚀 Full Stack Developer with experience in MERN, Python 🚀🔥
//           </h1>
//         </div>
//         <div className="relative">
//           <img
//             src={Abhiram} // Update with correct image path
//             alt="Abhiram Paidimarri"
//             className="w-11/12 h-11/12 rounded-sm object-cover transform scale-105"
//           />
//         </div>
//       </div>
//       <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Abhiram from "../../assets/Images/Abhiram.png";

const Home = () => {
  return (
    <div className="mx-3">
      {/* Container for content, centered on the page */}
      <div className="relative font-display flex flex-col justify-center items-center text-center text-white">
        {/* Greeting and Title Section */}
        <div className="mb-10">
          {/* Responsive Headings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
            Hello, I'm Abhiram
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">
            🔥 🚀 Full Stack Developer with experience in MERN, Python 🚀🔥
          </h1>
        </div>

        {/* Responsive Image Section */}
        <div className="relative">
          <img
            src={Abhiram}
            alt="Abhiram Paidimarri"
            className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 h-auto rounded-sm object-cover transform scale-105"
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Home;
