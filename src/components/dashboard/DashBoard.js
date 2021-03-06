import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from'react-router-dom';

export class DashBoard extends Component {
  render() {

    const { projects } = this.props;
    const{auth}=this.props;

    if(!auth.uid){
      return <Redirect to='/signin'/>
      
    }

    return (
      <div className="dashboard container">
        <div>
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1 grey-text">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth:state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(DashBoard);
