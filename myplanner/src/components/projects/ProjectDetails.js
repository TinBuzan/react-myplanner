import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Anim exercitation adipisicing elit commodo esse nulla voluptate consectetur deserunt eu reprehenderit ad minim sint. Consectetur reprehenderit ea exercitation et tempor. Qui velit voluptate labore commodo mollit veniam non. Aliqua Lorem duis ex nostrud. Excepteur magna ea nostrud magna cupidatat duis exercitation exercitation eiusmod.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Tin Buzancic</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

