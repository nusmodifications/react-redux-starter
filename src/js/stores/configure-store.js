// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import requestsMiddleware from 'middlewares/requests-middleware';

// Creates a preconfigured store for this example.
export default function configureStore() {
  const middlewares = [thunk, requestsMiddleware];
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    const logger = require('redux-logger').createLogger({
      level: 'info',
      collapsed: true,
      duration: true,
    });
    /* eslint-enable */
    middlewares.push(logger);
  }
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
