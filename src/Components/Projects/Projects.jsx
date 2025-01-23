import React, { useState } from "react";
import RollingGallery from "./RollingGallery";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    title: "Automated Web Scraping and Data Integration using AWS",
    description: [
      "Developed a Python script using BeautifulSoup for automated web scraping.",
      "Automated execution via AWS Lambda & CloudWatch cron jobs.",
      "Integrated Google Sheets API for real-time data reporting.",
    ],
    image:
      "https://blog.apify.com/content/images/2023/09/what-is-web-scraping-websites-web-scraper-structured-data-1.png",
    link: "https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing",
  },
  {
    title: "Chat with PDF using Google Gemini AI and LangChain",
    description: [
      "Built a web app to upload PDFs and generate answers based on content.",
      "Used Google Gemini AI with LangChain for conversational AI.",
      "Implemented FAISS vector store for efficient document searching.",
    ],
    image:
      "https://www.zdnet.com/a/img/resize/02ce32fd41dbf78e0ad4ea0070d02cd5b30d42c1/2024/02/07/5374e91a-e8ae-4337-84ac-b9eb9c977453/screenshot-2024-02-07-at-5-08-13pm.png?auto=webp&width=1280",
    link: "https://github.com/Abhiram-23/genAI_Gemini",
  },
  {
    title: "React-Based Video Streaming Application",
    description: [
      "Developed a video streaming app using React.",
      "Implemented responsive UI and smooth video playback features.",
      "Optimized performance with lazy loading and React hooks.",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNqxT6YhSr_VfKD_p8R-126I6WDe4CkjngA&s",
    link: "https://github.com/Abhiram-23/video_streaming",
  },
  {
    title: "Drowsiness Detection using OpenCV",
    description: [
      "Built a real-time drowsiness detection system using OpenCV.",
      "Tracked eye movements using Eye Aspect Ratio (EAR).",
      "Integrated an alert system for real-time notifications.",
    ],
    image:
      "https://www.labellerr.com/blog/content/images/size/w2000/2023/11/Driver-drowsiness-main.webp",
    link: "https://github.com/Abhiram-23/drowsiness_detection",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>

      {/* Rolling Gallery */}
      <RollingGallery
        autoplay={true}
        pauseOnHover={true}
        images={projectsData.map((project) => project.image)}
        projects={projectsData}
        onClick={(index) => setSelectedProject(projectsData[index])}
      />

      {/* Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
