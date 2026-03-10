import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // Check this import path

function Projects() {
  // Add a console.log to debug
  console.log("Projects data:", projects);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      {projects && projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects to display</p>
      )}
    </div>
  );
}

export default Projects;
