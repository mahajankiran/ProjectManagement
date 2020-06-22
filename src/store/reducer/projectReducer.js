// const initState = {
//   projects: [
//     {
//       id: "1",
//       title: "Help me find the remote!",
//       content: "blah blah blah"
//     },
//     {
//       id: "2",
//       title: "Become a 6* coder!",
//       content: "blah blah blah"
//     },
//     {
//       id: "3",
//       title: "Stay Updated!",
//       content: "blah blah blah"
//     }
//   ]
// };

// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "CREATE_PROJECT":
//       console.log("created project", action.project);
//       return state;
//     case "CREATE_PROJECT_ERROR":
//       console, log("create project error", action.err);
//       return state;
//     default:
//       return state;
//   }
// };

// export default projectReducer;

const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
