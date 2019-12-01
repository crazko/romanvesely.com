import React from 'react';
import projects from '../data/projects.yaml';

export default () =>
  projects.parameters.projects.serious.map(project => (
    <>
      {project.image && <img src={project.image} alt={project.name} />}

      <h2>
        <a href={project.url}>{project.name}</a>
      </h2>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.repository && (
        <p>
          <a href={project.repository} className="link--more">
            Look inside
          </a>
        </p>
      )}
    </>
  ));
