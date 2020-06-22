import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect}  from 'react-router-dom';

const ProjectDetails = props => {
  const { project } = props;
  const {auth}=props;
  if(!auth.uid){
    return<Redirect to='/signin'/>
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content blue-grey darken-2">
            <span className="card-title  cyan-text text-accent-3">{project.title}</span>
            <p className=" deep-orange-text text-accent-1">{project.content}</p>
          </div>
          <div className="card-action  blue-grey lighten-3 white-text ">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <p>Loading Project .....</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
 
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth:state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
