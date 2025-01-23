import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [frontendSvgs, setFrontendSvgs] = useState([]);
  const [backendSvgs, setBackendSvgs] = useState([]);
  const [otherSvgs, setOtherSvgs] = useState([]);

  useEffect(() => {
    // Import SVGs with static paths
    const importSvgs = async (svgFiles, setState) => {
      try {
        const loadedSvgs = await Promise.all(
          Object.entries(svgFiles).map(async ([path, importer]) => {
            const module = await importer();
            const fileName = path.split("/").pop().replace(".svg", "");
            return { path: module.default, name: fileName };
          })
        );
        setState(loadedSvgs);
        console.log(`Loaded SVGs:`, loadedSvgs); // Debugging Log
      } catch (error) {
        console.error(`Error loading SVGs:`, error);
      }
    };

    // Define static import paths
    const frontendSvgs = import.meta.glob(
      "../../../src/assets/Skills/FrontEnd/*.svg"
    );
    const backendSvgs = import.meta.glob(
      "../../../src/assets/Skills/Backend/*.svg"
    );
    const otherSvgs = import.meta.glob(
      "../../../src/assets/Skills/Other/*.svg"
    );

    importSvgs(frontendSvgs, setFrontendSvgs);
    importSvgs(backendSvgs, setBackendSvgs);
    importSvgs(otherSvgs, setOtherSvgs);
  }, []);

  const renderSvgSection = (title, svgs) => (
    <div className="mb-8" id="about">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {svgs.length === 0 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          svgs.map((svg, index) => (
            <div
              key={index}
              className="relative group mx-1 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <img
                src={svg.path}
                alt={svg.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{svg.name}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="font-display mx-3">
      <div className="container px-0 mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12 items-start">
          {/* Tech Stack Section */}
          <div className="md:w-1/2">
            {renderSvgSection("Frontend Technologies", frontendSvgs)}
            {renderSvgSection("Backend Technologies", backendSvgs)}
            {renderSvgSection("Other Technologies", otherSvgs)}
          </div>

          {/* About Me Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="text-xl antialiased text-pink-100 font-semibold leading-relaxed space-y-4 text-justify">
              <p>
                Hi, I'm{" "}
                <span className="text-orange-400 font-bold">
                  Abhiram Paidimarri
                </span>
                , a passionate software engineer with a strong background in
                full-stack development and cloud technologies.
              </p>
              <p>
                I hold a Master's in{" "}
                <span className="text-blue-400 font-semibold">Informatics</span>{" "}
                from the{" "}
                <span className="text-blue-400 font-semibold">
                  University of Louisiana at Lafayette
                </span>
                , and a Bachelor's in{" "}
                <span className="text-blue-400 font-semibold">
                  Electronics & Computer Engineering
                </span>{" "}
                from Hyderabad, India.
              </p>
              <p>
                My expertise includes frontend, backend, and cloud technologies.
                I love solving complex problems, automating workflows, and
                building scalable applications.
              </p>
              <p>
                Feel free to reach out via{" "}
                <a
                  href="mailto:abhipaidimarri23@gmail.com"
                  className="text-blue-400 underline"
                >
                  email
                </a>{" "}
                or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/abhirampaidimarri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default AboutMe;
