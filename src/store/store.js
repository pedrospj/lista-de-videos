import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  authReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
