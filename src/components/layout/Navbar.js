import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOut'
import {connect} from 'react-redux';

const Navbar = (props) => {
  const {auth,profile} =props;
  console.log(auth);
  const links =auth.uid? <SignedInLinks profile={profile}/>:<SignedOutLinks profile={profile}/>;
  return (
    <nav className="nav-wrapper   blue-grey darken-4 ">
      <div className="container">
        <Link to='/' className="brand-logo cyan-text tex-accent-2">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
     auth:state.firebase.auth,
     profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)( Navbar)