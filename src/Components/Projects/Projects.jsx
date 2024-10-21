import React from "react";

const Projects = () => {
  return (
    <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 font-display mx-3">
      <div class="container">
        <div class="flex flex-wrap mx-4">
          <div class="w-full  md:w-1/2 xl:w-1/3 px-4 py-2">
            <div class="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://blog.apify.com/content/images/2023/09/what-is-web-scraping-websites-web-scraper-structured-data-1.png"
                alt="image"
                class="w-full h-80"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing"
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Automated Web Scraping and Data Integration using AWS
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a Python script using the BeautifulSoup library to
                    automate web scraping for client websites, retrieving and
                    processing updated data daily.
                  </li>
                  <li>
                    Automated script execution using AWS Lambda, and cron job
                    triggered by AWS CloudWatch.
                  </li>
                  <li>
                    Managed dependencies via AWS S3 for seamless Lambda
                    execution, while integrating Google Sheets API to
                    automatically update and streamline the reporting of
                    extracted data.
                  </li>
                </ul>

                <a
                  href="https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full  md:w-1/2 xl:w-1/3 px-4 py-2">
            <div class="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/resize/02ce32fd41dbf78e0ad4ea0070d02cd5b30d42c1/2024/02/07/5374e91a-e8ae-4337-84ac-b9eb9c977453/screenshot-2024-02-07-at-5-08-13pm.png?auto=webp&width=1280"
                alt="image"
                class="w-full h-80"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/video_streaming"
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Chat with PDF using Google Gemini AI and LangChain
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a web application to upload PDFs and generate
                    detailed answers to user questions based on the document
                    content.
                  </li>
                  <li>
                    Utilized Google Gemini AI for embedding and
                    question-answering capabilities with LangChain handling the
                    conversational flow.
                  </li>
                  <li>
                    Implemented text extraction from PDFs using PyPDF2 and split
                    large text into chunks with LangChain's
                    RecursiveCharacterTextSplitter.
                  </li>
                  <li>
                    Built a local FAISS vector store to perform similarity
                    searches on the document text for accurate question
                    matching.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/genAI_Gemini"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4 py-2">
            <div class="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNqxT6YhSr_VfKD_p8R-126I6WDe4CkjngA&s"
                alt="image"
                class="w-full h-80"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/video_streaming"
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    React-Based Video Streaming Application
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a video streaming application using React for
                    seamless content viewing.
                  </li>
                  <li>
                    Implemented a responsive user interface with smooth video
                    playback and intuitive navigation.
                  </li>
                  <li>
                    Integrated video player features such as play/pause, seek,
                    volume control, and fullscreen mode.
                  </li>
                  <li>
                    Optimized the app for performance with lazy loading and
                    efficient state management using React hooks.
                  </li>
                  <li>
                    Enhanced user experience with customizable video quality
                    options and support for various file formats.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/video_streaming"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 px-4 py-2">
            <div class="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="data:image/jpeg;base64,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"
                alt="image"
                class="w-full h-80"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/drowsiness_detection"
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Drowsiness Detection using OpenCV
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Built a real-time drowsiness detection system using OpenCV
                    and Python.
                  </li>
                  <li>
                    Used facial landmarks to track eye movements and detect
                    drowsiness via Eye Aspect Ratio (EAR).
                  </li>
                  <li>
                    Integrated a threshold-based alert system that triggers
                    audio warnings for prolonged eye closure.
                  </li>
                  <li>
                    Optimized for low-latency detection and tested under varied
                    lighting and angles.
                  </li>
                  <li>
                    Designed for potential scalability in vehicle or safety
                    monitoring systems.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/drowsiness_detection"
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
