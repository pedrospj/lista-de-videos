import * as actionTypes from '../actionTypes';

const initialState = {
  userName: null,
  userEmail: null,
  redirect: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, ...action.payload };
    case actionTypes.LOGOUT:
      return initialState;
    case actionTypes.LOGIN_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
