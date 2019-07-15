import * as actionTypes from '../actionTypes';
import { auth, googleProvider } from '../../firebaseConfig';

const login = user => {
  console.log(user, 'oi');
  return {
    type: actionTypes.LOGIN,
    payload: user
  };
};

export const loginWithGoogle = () => {
  return dispatch => {
    auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log(result);
        const user = {
          userName: result.user.displayName,
          userEmail: result.user.email
        };
        dispatch(login(user));
      })
      .catch(error => console.log(error));
  };
};

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

export const logout = () => {
  return dispatch => {
    auth.signOut().then(_ => dispatch({ type: actionTypes.LOGOUT }));
  };
};
