import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './projects.css';
import ProjectToggler from './ProjectToggler';
import Project from './Project';
import projectDataArray from '../../data/projects';

export default function Projects() {
  const [projectData, setProjectData] = useState(projectDataArray);

  const renderProjects = (item, index) => {
    return (
      <Project
        id={item.id}
        key={nanoid()}
        modalName={item.modalName}
        targetId={item.targetId}
        image={item.image}
        alt={item.alt}
        title={item.title}
        github={item.github}
        hosted={item.hosted}
        technology={item.technology}
        details={item.details}
        collapsed={item.collapsed}
      />
    );
  };

  return (
    <section id="projects" className="projectSection p-4">
      <h2 className="text-center pt-4">
        P<span className="underline">ROJECT</span>S
      </h2>
      <ProjectToggler />
      <div className="row">{projectData.map(renderProjects)}</div>
    </section>
  );
}
