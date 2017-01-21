import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import requests from './requests';
import counter from './counter';
import reddit from './reddit';
import errors from './errors';

export default combineReducers({
  counter,
  reddit,
  requests,
  errors,
  routing: routerReducer,
});
