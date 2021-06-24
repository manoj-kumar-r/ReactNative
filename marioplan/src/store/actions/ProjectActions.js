export const createProject = (project) => {
    return (dispatch, getState) => {
        // Make async call to db 

        // then dispatch
        dispatch({
            type: 'CREATE_PROJECT',
            project
        });
    }
}