import React from "react";
import "./Experience.css";
import SpotlightCard from "./SpotlightCard";

const experiences = [
  {
    company: "University of Louisiana at Lafayette, USA",
    role: "Graduate Assistant – University Computing Support Service",
    duration: "September 2023 – Present",
    responsibilities: [
      "Migrated services from virtual machines to Docker containers on AWS ECS.",
      "Integrated AWS Elastic File System (EFS) for scalable file storage.",
      "Implemented file syncing from EFS to AWS S3 with lifecycle policies for archiving.",
    ],
  },
  {
    company: "Valuebound Consulting Services Pvt. Ltd, India",
    role: "Software Development Engineer (SDE1)",
    duration: "September 2021 – July 2023",
    responsibilities: [
      "Developed the PMO module for ERP, improving reporting for 200+ employees.",
      "Integrated Dialpad, Twilio, and SalesLoft with MindTickle AI for analytics.",
      "Automated call data processing using OAuth 2.0, webhooks, and AWS S3.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h4 className="section-title">Experience</h4>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <SpotlightCard key={index} className="custom-spotlight-card">
            <div className="timeline-item">
              <div className="timeline-content">
                <h5 className="company-name">{exp.company}</h5>
                <h6 className="role">{exp.role}</h6>
                <p className="duration">{exp.duration}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
