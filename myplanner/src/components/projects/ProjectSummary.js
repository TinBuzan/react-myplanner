import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className="project-summary card z-depth-0">
        <div className="card-content grey-text text-darken-3">
  <span className="card-title">{project.title}</span>
          <p>Posted by Tin Buzancic</p>
          <p className="grey-text">3rd of September, 1AM</p>
        </div>
      </div>
  )
}

export default ProjectSummary;
