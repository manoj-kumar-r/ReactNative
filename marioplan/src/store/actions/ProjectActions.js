export const createProject = (project) => {
    return (dispatch, getState) => {
        // Make async call to db 
        console.log('Async Action');
        // then dispatch
        dispatch({
            type: 'CREATE_PROJECT',
            project
        });
    }
}