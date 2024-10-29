import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
      <div className="flip-card h-[500px] w-full">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">Hover to see details</p>
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Learn More
                </span>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back bg-white rounded-xl shadow-lg p-6 overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <ul className="text-gray-600 space-y-2 mb-16 list-disc list-inside text-left">
              {description.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 bg-white py-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Project
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
