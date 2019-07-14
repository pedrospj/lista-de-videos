import * as actionTypes from '../actionTypes';
import { auth, googleProvider } from '../../firebaseConfig';

const login = user => {
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
          usermail: result.user.email
        };
        dispatch(login(user));
      })
      .catch(error => console.log(error));
  };
};
