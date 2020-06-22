import React from 'react'
import moment from 'moment';
const ProjectSummary=({project})=> {
    return (
        <div className="card z-depth-0 project-summary blue-grey darken-1">
          <div className="card-content white-text ">
              <span className="card-title cyan-text text-accent-1">{project.title}</span>
    <p>Posted by {project.authorFirstName}{project.authorLastName}</p>
    <p >{moment(project.createdAt.toDate().toString()).calendar()}</p>
          </div>
      </div>
    )
}

export default ProjectSummary
