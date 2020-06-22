// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import {connect} from 'react-redux';
// import {signOut } from '../../store/actions/authActions'

// const SignedInLinks = (props) => {

  
//   return (
//     <div >
//       <ul className="right">
//         <li ><NavLink className="cyan-text text-accent-2" to='/create'>New Project</NavLink></li>
//         <li><a onClick={props.signOut}>Log Out</a></li>
//         <li><NavLink to='/' className="btn btn-floating  blue accent-1">SM</NavLink></li>
//       </ul>
//     </div>
//   )
// }

// const mapDispatchToProps =(dispatch)=>{
//   return{
//     signOut: () => dispatch(signOut())
//   }
// }
// export default connect(null,mapDispatchToProps)(SignedInLinks)

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink  className="cyan-text text-accent-2" to='/create'>New Project</NavLink></li>
        <li><a  className="cyan-text text-accent-2" onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)