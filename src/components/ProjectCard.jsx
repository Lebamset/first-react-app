import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  // Add safety check
  if (!project) {
    return <div>Loading project...</div>;
  }

  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={project.image || "https://via.placeholder.com/300x200"}
          alt={project.title || "Project image"}
        />
      </div>
      <div className="project-content">
        <h3>{project.title || "Untitled Project"}</h3>
        <p>{project.description || "No description available"}</p>
        <div className="technologies">
          {project.technologies &&
            project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
