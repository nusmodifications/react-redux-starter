// @flow
import type { FSA } from 'types/redux';
import type { RequestsState } from 'reducers/requests';

import * as helpersActions from 'actions/helpers';
import * as RequestResultCases from 'middlewares/requests-middleware';
import requests, {
  requestStateSuffix,
  defaultRequestsState,
} from './requests';

const fooBar = 'fooBar';
const defaultFooBarRequest = {
  isPending: false,
  isSuccessful: false,
  isFailure: false,
};
const requestsStateFooBarDefault: RequestsState = {
  [fooBar + requestStateSuffix]: defaultFooBarRequest,
};
const requestsStateFooBarPending: RequestsState = {
  [fooBar + requestStateSuffix]: {
    ...defaultFooBarRequest,
    isPending: true,
  },
};
const requestsStateFooBarSuccess: RequestsState = {
  [fooBar + requestStateSuffix]: {
    ...defaultFooBarRequest,
    isSuccessful: true,
  },
};
const requestsStateFooBarFailure: RequestsState = {
  [fooBar + requestStateSuffix]: {
    ...defaultFooBarRequest,
    isFailure: true,
  },
};

describe('requests reducer', () => {
  it('returns default state for non-applicable actions', () => {
    const action: FSA = {
      type: 'FOO_BAR',
      payload: null,
    };
    const nextState: RequestsState = requests(requestsStateFooBarDefault, action);
    expect(nextState).toEqual(requestsStateFooBarDefault);

    const action2: FSA = {
      type: 'FOO_BAR',
      meta: {},
      payload: null,
    };
    const nextState2: RequestsState = requests(requestsStateFooBarDefault, action2);
    expect(nextState2).toEqual(requestsStateFooBarDefault);
  });

  it('can reset all state', () => {
    const action: FSA = helpersActions.resetAllState();
    const nextState: RequestsState = requests(requestsStateFooBarDefault, action);
    expect(nextState).toEqual(defaultRequestsState());
  });

  describe('reset request state', () => {
    it('can reset pending request', () => {
      const action: FSA = helpersActions.resetRequestState(fooBar);
      const nextState: RequestsState = requests(requestsStateFooBarPending, action);
      expect(nextState).toEqual(requestsStateFooBarDefault);
    });

    it('can reset successful request', () => {
      const action: FSA = helpersActions.resetRequestState(fooBar);
      const nextState: RequestsState = requests(requestsStateFooBarSuccess, action);
      expect(nextState).toEqual(requestsStateFooBarDefault);
    });

    it('can reset failed request', () => {
      const action: FSA = helpersActions.resetRequestState(fooBar);
      const nextState: RequestsState = requests(requestsStateFooBarFailure, action);
      expect(nextState).toEqual(requestsStateFooBarDefault);
    });
  });

  describe('request status manipulation', () => {
    it('can set a request to pending', () => {
      const action: FSA = {
        type: fooBar + RequestResultCases.REQUEST,
        meta: {
          requestStatus: RequestResultCases.REQUEST,
        },
        payload: null,
      };
      const nextState: RequestsState = requests(requestsStateFooBarDefault, action);
      expect(nextState).toEqual(requestsStateFooBarPending);
    });

    it('can set a request to successful', () => {
      const action: FSA = {
        type: fooBar + RequestResultCases.SUCCESS,
        meta: {
          requestStatus: RequestResultCases.SUCCESS,
        },
        payload: null,
      };
      const nextState: RequestsState = requests(requestsStateFooBarDefault, action);
      expect(nextState).toEqual(requestsStateFooBarSuccess);
    });

    it('can set a request to pending', () => {
      const action: FSA = {
        type: fooBar + RequestResultCases.FAILURE,
        meta: {
          requestStatus: RequestResultCases.FAILURE,
        },
        payload: null,
      };
      const nextState: RequestsState = requests(requestsStateFooBarDefault, action);
      expect(nextState).toEqual(requestsStateFooBarFailure);
    });
  });
});
