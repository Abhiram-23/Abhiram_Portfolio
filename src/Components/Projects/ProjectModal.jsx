import React from "react";
import { Github, ExternalLink, X } from "lucide-react";
import "./Projects.css";
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h3 className="modal-title">{project.title}</h3>
        <ul className="modal-description">
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="modal-links">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
          >
            <Github className="w-4 h-4 mr-2" /> View Project
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn secondary"
          >
            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
