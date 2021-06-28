export const signIn = (credentials) => {
    console.log('Sign In Called')
    return (dispatch, getState, { getFirebase }) => {
        getFirebase()
            .auth()
            .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            }).catch((error) => {
                dispatch({ type: 'LOGIN_ERROR', error });
            });
    }
}

export const signOut = () => {
    console.log('Sign out Called')
    return (dispatch, getState, { getFirebase }) => {
        getFirebase()
            .auth()
            .signOut().then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' });
            }).catch((error) => {
                dispatch({ type: 'SIGNOUT_ERROR', error });
            });
    }
}