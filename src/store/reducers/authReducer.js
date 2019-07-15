import * as actionTypes from '../actionTypes';

const initialState = {
  userName: null,
  userEmail: null,
  redirect: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, ...action.payload };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
