import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  const projectList = projects ? projects.map(project => {
    return(
      <ProjectSummary project={ project } key={ project.id }/>
    )
  }) : (
    <div>There are no projects </div>
  )

  return (
    <div className="project-list section">
      { projectList }
    </div>
  )
}

export default ProjectList;
