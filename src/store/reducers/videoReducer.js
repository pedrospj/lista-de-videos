import * as actionTypes from '../actionTypes';
const initialState = {
  list: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEOS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
