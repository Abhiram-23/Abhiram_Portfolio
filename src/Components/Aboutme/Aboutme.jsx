import React, { useEffect, useState } from "react";

const Aboutme = () => {
  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    // Dynamically import all SVGs from the folder
    const svgFiles = import.meta.glob("../../../src/assets/Skills/*.svg");
    const importSvgs = async () => {
      const loadedSvgs = [];
      for (const path in svgFiles) {
        const module = await svgFiles[path]();
        const fileName = path.split("/").pop().replace(".svg", "");
        loadedSvgs.push({ path: module.default, name: fileName });
      }
      setSvgs(loadedSvgs);
    };

    importSvgs();
  }, []);

  return (
    <div className="font-display min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col  md:flex-row md:space-x-12 items-start">
          {/* Name and SVGs Section */}
          <div className="md:w-1/2">
            {/* Name */}
            <div className=" my-5 text-5xl  text-center italic font-black decora ti on-from-font underline-offset-from-font">
              Abhiram Paidimarri
            </div>

            {/* SVGs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {svgs.map((svg, index) => (
                <div
                  key={index}
                  className="relative group w-16 h-16 sm:w-24 sm:h-24 overflow-hidden hover:scale-110 transform transition-all duration-500 ease-in-out rounded-full"
                >
                  <img
                    src={svg.path}
                    alt={svg.name}
                    className="w-full h-full object-contain transform  group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{svg.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="px-5 text-xl antialiased text-pink-100 font-semibold leading-relaxed space-y-4">
              <p>
                Welcome to my portfolio! I'm Abhiram Paidimarri, a passionate
                and driven software engineer currently pursuing a Master of
                Science in Informatics at the University of Louisiana at
                Lafayette, USA.
              </p>
              <p>
                My academic journey began with a Bachelor of Technology in
                Electronics & Computer Engineering from JB Institute of
                Engineering and Technology in Hyderabad, India. My professional
                experience includes working as a Software Development Engineer
                (SDE1) at Valuebound Consulting Services Pvt. Ltd in India.
              </p>
              <p>
                During my tenure, I was instrumental in implementing an ERP
                system that significantly enhanced internal process efficiency
                and cross-team communication. I also played a key role in
                integrating Dialpad, Twilio, and SalesLoft with the MindTickle
                Call AI Platform, which led to notable improvements in
                data-driven insights and operational efficiency for our clients.
              </p>
              <p>
                Before my role as an SDE1, I started as a Software Trainee at
                Valuebound, where I gained substantial expertise in developing
                enterprise resource planning portals using cutting-edge
                technologies. I am passionate about leveraging technology to
                solve real-world problems and continuously seek opportunities to
                learn and grow in the dynamic field of software engineering.
              </p>
              <p>
                My journey is driven by a commitment to excellence and a desire
                to make a meaningful impact through innovative solutions. Feel
                free to reach out to me via email at
                <a
                  href="mailto:abhiram.paidimarri1@louisiana.edu"
                  className="text-blue-600 underline"
                >
                  abhiram.paidimarri1@louisiana.edu
                </a>
                or connect with me on LinkedIn. You can also find my coding
                profiles on Leetcode and HackerRank. Thank you for visiting my
                portfolio, and I look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

// import React, { useEffect, useState } from "react";

// const Aboutme = () => {
//   const [svgs, setSvgs] = useState([]);

//   useEffect(() => {
//     // Dynamically import all SVGs from the folder
//     const svgFiles = import.meta.glob("../../../src/assets/Skills/*.svg");
//     const importSvgs = async () => {
//       const loadedSvgs = [];
//       for (const path in svgFiles) {
//         const module = await svgFiles[path]();
//         const fileName = path.split("/").pop().replace(".svg", "");
//         loadedSvgs.push({ path: module.default, name: fileName });
//       }
//       setSvgs(loadedSvgs);
//     };

//     importSvgs();
//   }, []);

//   return (
//     <div className="font-display min-h-screen bg-gray-900 text-white">
//       <div className="container mx-auto p-5">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-start">
//           {/* Name and SVGs Section */}
//           <div className="md:w-1/2">
//             {/* Name */}
//             <div className="my-5 text-4xl sm:text-5xl text-center italic font-black underline decoration-from-font underline-offset-8">
//               Abhiram Paidimarri
//             </div>

//             {/* SVGs */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
//               {svgs.map((svg, index) => (
//                 <div
//                   key={index}
//                   className="relative group w-16 h-16 sm:w-24 sm:h-24 overflow-hidden hover:scale-110 transform transition-all duration-500 ease-in-out rounded-full"
//                 >
//                   <img
//                     src={svg.path}
//                     alt={svg.name}
//                     className="w-full h-full object-contain transform group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
//                   />
//                   <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span>{svg.name}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Description Section */}
//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <div className="px-3 sm:px-5 text-lg sm:text-xl antialiased text-pink-100 font-semibold leading-relaxed space-y-4">
//               <p>
//                 Welcome to my portfolio! I'm Abhiram Paidimarri, a passionate
//                 and driven software engineer currently pursuing a Master of
//                 Science in Informatics at the University of Louisiana at
//                 Lafayette, USA.
//               </p>
//               <p>
//                 My academic journey began with a Bachelor of Technology in
//                 Electronics & Computer Engineering from JB Institute of
//                 Engineering and Technology in Hyderabad, India. My professional
//                 experience includes working as a Software Development Engineer
//                 (SDE1) at Valuebound Consulting Services Pvt. Ltd in India.
//               </p>
//               <p>
//                 During my tenure, I was instrumental in implementing an ERP
//                 system that significantly enhanced internal process efficiency
//                 and cross-team communication. I also played a key role in
//                 integrating Dialpad, Twilio, and SalesLoft with the MindTickle
//                 Call AI Platform, which led to notable improvements in
//                 data-driven insights and operational efficiency for our clients.
//               </p>
//               <p>
//                 Before my role as an SDE1, I started as a Software Trainee at
//                 Valuebound, where I gained substantial expertise in developing
//                 enterprise resource planning portals using cutting-edge
//                 technologies. I am passionate about leveraging technology to
//                 solve real-world problems and continuously seek opportunities to
//                 learn and grow in the dynamic field of software engineering.
//               </p>
//               <p>
//                 My journey is driven by a commitment to excellence and a desire
//                 to make a meaningful impact through innovative solutions. Feel
//                 free to reach out to me via email at{" "}
//                 <a
//                   href="mailto:abhiram.paidimarri1@louisiana.edu"
//                   className="text-blue-600 underline"
//                 >
//                   abhiram.paidimarri1@louisiana.edu
//                 </a>
//                 or connect with me on LinkedIn. You can also find my coding
//                 profiles on Leetcode and HackerRank. Thank you for visiting my
//                 portfolio, and I look forward to connecting with you!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutme;
