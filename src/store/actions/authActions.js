import * as actionTypes from '../actionTypes';
import { auth, googleProvider, githubProvider } from '../../firebaseConfig';

export const signup = userInfo => {
  return dispatch => {
    auth
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(response => {
        auth.currentUser
          .updateProfile({
            displayName: userInfo.firstName + ' ' + userInfo.lastName
          })
          .then(_ => {
            const user = {
              userName: response.user.displayName,
              userEmail: response.user.email,
              redirect: true
            };
            dispatch(login(user));
          });
      })
      .catch(error => console.log(error, 'erro'));
  };
};

const login = (user, disposeModal) => {
  if (disposeModal) {
    disposeModal();
  }
  return {
    type: actionTypes.LOGIN,
    payload: { ...user, error: false }
  };
};

export const loginWithGoogle = disposeModal => {
  return dispatch => {
    auth
      .signInWithPopup(googleProvider)
      .then(result => {
        const user = {
          userName: result.user.displayName,
          userEmail: result.user.email
        };
        dispatch(login(user, disposeModal));
      })
      .catch(error => console.log(error));
  };
};

export const loginWithGithub = disposeModal => {
  return dispatch => {
    auth
      .signInWithPopup(githubProvider)
      .then(result => {
        const user = {
          userName: result.user.displayName,
          userEmail: result.user.email
        };
        dispatch(login(user, disposeModal));
      })
      .catch(error => console.log(error));
  };
};

export const loginWithEmailAndPassword = ({
  email,
  password,
  disposeModal
}) => {
  return dispatch => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const user = {
          userName: response.user.displayName,
          userEmail: response.user.email
        };
        dispatch(login(user, disposeModal));
        disposeModal();
      })
      .catch(_ => dispatch({ type: actionTypes.LOGIN_ERROR }));
  };
};

export const logout = () => {
  return dispatch => {
    auth.signOut().then(_ => dispatch({ type: actionTypes.LOGOUT }));
  };
};
