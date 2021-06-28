

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async call to db  
        const profile = getState().firebase.profile
        getFirestore().collection('projects').add({
            ...project,
            authorFirstName: profile.firstname,
            authorLastName: profile.lastname,
            authorId: profile.userid,
            createdAt: new Date()
        }).then(() => {
            // then dispatch create project 
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((error) => {
            // then dispatch error
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error
            });
        })
    }
}