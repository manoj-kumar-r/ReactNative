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

export const signUp = (newUser) => {
    console.log('Sign In Called')
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        getFirebase()
            .auth()
            .createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then((response) => {
                console.log('Sign Up response')
                console.log(response)
                return getFirestore()
                    .collection('users')
                    .doc(response.user.uid)
                    .set({
                        ...newUser,
                        userid: response.user.uid,
                        initials: newUser.firstname[0] + newUser.lastname[0]
                    })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            }).catch((error) => {
                dispatch({ type: 'SIGNUP_ERROR', error });
            });
    }
}