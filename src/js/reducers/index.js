// @flow
import type { FSA } from 'redux';
import type { CounterState } from 'reducers/counter';
import type { ErrorsState } from 'reducers/errors';
import type { RedditState } from 'reducers/reddit';
import type { RequestsState } from 'reducers/requests';

import { routerReducer } from 'react-router-redux';
import counter from 'reducers/counter';
import errors from 'reducers/errors';
import reddit from 'reducers/reddit';
import requests from 'reducers/requests';

export type StoreState = {
  counter: CounterState,
  errors: ErrorsState,
  reddit: RedditState,
  requests: RequestsState,
  routing: Object,
};

// $FlowFixMe: Delegate the individual reducer defaults to respective reducers.
export default function (state: StoreState = {}, action: FSA): StoreState {
  return {
    counter: counter(state.counter, action),
    errors: errors(state.errors, action),
    reddit: reddit(state.reddit, action),
    requests: requests(state.requests, action),
    routing: routerReducer(state.routing, action),
  };
}
