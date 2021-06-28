

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to db 
        getFirestore().collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 1123,
            createdAt: new Date()
        }).then(() => {
            // then dispatch create project 
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((error)=>{
            // then dispatch error
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error
            });
        })
    }
}