import React from 'react';
import './projects.css';
import ProjectToggler from './ProjectToggler';
import Project from './Project';
import projectData from '../../data/projects';

export default function Projects() {
  
  const renderProjects = (item, index) => {
    return <Project id={item.id} image={item.image} alt={item.alt} />;
  };

  return (
    <div>
      <section id="projects" className="projectSection p-4">
        <h2 className="text-center pt-4">
          P<span className="underline">ROJECT</span>S
        </h2>
        <ProjectToggler />
        {projectData.map(renderProjects)}
      </section>
    </div>
  );
}
