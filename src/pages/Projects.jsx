import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p className="section-intro">
        Here are some of the projects I've built during my software engineering
        journey. Each project represents different skills and technologies I've
        learned.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
