const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
}

const projectReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created Project', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.error);
      return state;

    case 'DELETE_PROJECT':
      break;

    default:
      return state;
  }
};

export default projectReducer;