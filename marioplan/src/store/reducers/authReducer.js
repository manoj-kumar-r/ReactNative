const initState = {}

const authReducer = (state = initState, action) => {
  console.log('authReducer State');
  console.log(state);
  console.log('authReducer action');
  console.log(action);

  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNOUT_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      } 
    case 'LOGIN_ERROR':
    case 'SIGNOUT_ERROR':
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;