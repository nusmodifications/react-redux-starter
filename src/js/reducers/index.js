/* eslint-disable flowtype/no-types-missing-file-annotation */
import type { FSA } from 'types/redux';
import type { CounterState } from 'reducers/counter';
import type { ErrorsState } from 'reducers/errors';
import type { RedditsState } from 'reducers/reddits';
import type { RequestsState } from 'reducers/requests';

import counter from 'reducers/counter';
import errors from 'reducers/errors';
import reddits from 'reducers/reddits';
import requests from 'reducers/requests';

export type StoreState = {
  counter: CounterState,
  errors: ErrorsState,
  reddits: RedditsState,
  requests: RequestsState,
};

// $FlowFixMe: Delegate the individual reducer defaults to respective reducers.
export default function (state: StoreState = {}, action: FSA): StoreState {
  return {
    counter: counter(state.counter, action),
    errors: errors(state.errors, action),
    reddits: reddits(state.reddits, action),
    requests: requests(state.requests, action),
  };
}
