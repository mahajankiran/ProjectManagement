//  const createProject = project => {
//   return (dispatch, getState,{getFirebase,getFirestore}) => {
//     // make async call to database
//      const firestore=getFirestore();
//      firestore.collection('projects').add({
//        ...project,
//        authorFirstName:'Kiran',
//        authorLastName:'Mahajan',
//        authorId:123,
//        ctreatedAt:new Date()
//      }).then(()=>{

//       dispatch({ type: "CREATE_PROJECT", project: project });

//      }).catch((err)=>{
//        dispatch({type:CREATE_PROJECT_ERROR,err})
//      })
   
//   };
// };

// export default createProject;

export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};
