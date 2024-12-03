import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Automated Web Scraping and Data Integration using AWS",
    description: [
      "Developed a Python script using the BeautifulSoup library to automate web scraping for client websites, retrieving and processing updated data daily.",
      "Automated script execution using AWS Lambda, and cron job triggered by AWS CloudWatch.",
      "Managed dependencies via AWS S3 for seamless Lambda execution, while integrating Google Sheets API to automatically update and streamline the reporting of extracted data.",
    ],
    image:
      "https://blog.apify.com/content/images/2023/09/what-is-web-scraping-websites-web-scraper-structured-data-1.png",
    link: "https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing",
  },
  {
    title: "Chat with PDF using Google Gemini AI and LangChain",
    description: [
      "Developed a web application to upload PDFs and generate detailed answers to user questions based on the document content.",
      "Utilized Google Gemini AI for embedding and question-answering capabilities with LangChain handling the conversational flow.",
      "Implemented text extraction from PDFs using PyPDF2 and split large text into chunks with LangChain's RecursiveCharacterTextSplitter.",
      "Built a local FAISS vector store to perform similarity searches on the document text for accurate question matching.",
    ],
    image:
      "https://www.zdnet.com/a/img/resize/02ce32fd41dbf78e0ad4ea0070d02cd5b30d42c1/2024/02/07/5374e91a-e8ae-4337-84ac-b9eb9c977453/screenshot-2024-02-07-at-5-08-13pm.png?auto=webp&width=1280",
    link: "https://github.com/Abhiram-23/genAI_Gemini",
  },
  {
    title: "React-Based Video Streaming Application",
    description: [
      "Developed a video streaming application using React for seamless content viewing.",
      "Implemented a responsive user interface with smooth video playback and intuitive navigation.",
      "Integrated video player features such as play/pause, seek, volume control, and fullscreen mode.",
      "Optimized the app for performance with lazy loading and efficient state management using React hooks.",
      "Enhanced user experience with customizable video quality options and support for various file formats.",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNqxT6YhSr_VfKD_p8R-126I6WDe4CkjngA&s",
    link: "https://github.com/Abhiram-23/video_streaming",
  },
  {
    title: "Drowsiness Detection using OpenCV",
    description: [
      "Built a real-time drowsiness detection system using OpenCV and Python.",
      "Used facial landmarks to track eye movements and detect drowsiness via Eye Aspect Ratio (EAR).",
      "Integrated a threshold-based alert system that triggers audio warnings for prolonged eye closure.",
      "Optimized for low-latency detection and tested under varied lighting and angles.",
      "Designed for potential scalability in vehicle or safety monitoring systems.",
    ],
    image:
      "https://www.labellerr.com/blog/content/images/size/w2000/2023/11/Driver-drowsiness-main.webp",
    link: "https://github.com/Abhiram-23/drowsiness_detection",
  },
];

const Projects = () => {
  return (
    <section className="py-16 font-display mx-3" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="flex justify-center flex-wrap">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
