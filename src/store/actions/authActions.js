//import * as actionTypes from '../actionTypes';
import { auth, googleProvider } from '../../firebaseConfig';

export const loginWithGoogle = () => {
  return dispatch => {
    auth.signInWithPopup(googleProvider).then(result => {
      console.log(result);
    });
  };
};
