import type { FSA } from 'types/redux';
import type { ErrorsState } from 'reducers/errors';

import errors, { defaultErrorsState } from './errors';
import * as helpersActions from 'actions/helpers';
import * as RequestResultCases from 'middlewares/requests-middleware';

const actionFoo = 'actionFoo';
const actionBar = 'actionBar';
const errorsStateWithEmptyErrors: ErrorsState = {
  [actionFoo]: {},
};
const errorPayload = {
  errors: [{
    code: 42,
    message: 'The meaning of life does not exist',
  }],
};
const errorsStateWithSomeErrors: ErrorsState = {
  ...errorsStateWithEmptyErrors,
  [actionBar]: errorPayload,
};

describe('errors reducer', () => {
  it('returns default state for non-applicable actions', () => {
    const action: FSA = {
      type: 'FOO_BAR',
    };
    const nextState: ErrorsState = errors(errorsStateWithEmptyErrors, action);
    expect(nextState).toEqual(errorsStateWithEmptyErrors);
  });

  it('can reset all state', () => {
    const action: FSA = helpersActions.resetAllState();
    const nextState: ErrorsState = errors(errorsStateWithEmptyErrors, action);
    expect(nextState).toEqual(defaultErrorsState);
  });

  describe('reset error state', () => {
    it('can reset for a domain', () => {
      const action: FSA = helpersActions.resetErrorState(actionBar);
      const nextState: ErrorsState = errors(errorsStateWithSomeErrors, action);
      expect(nextState).toEqual({
        ...errorsStateWithEmptyErrors,
        [actionBar]: {},
      });
    });

    it('can reset for multiple domains', () => {
      const action: FSA = helpersActions.resetErrorState([actionFoo, actionBar]);
      const nextState: ErrorsState = errors(errorsStateWithSomeErrors, action);
      expect(nextState).toEqual({
        [actionFoo]: {},
        [actionBar]: {},
      });
    });
  });

  describe('request success', () => {
    it('omits domains of successful requests', () => {
      const action: FSA = {
        type: actionBar + RequestResultCases.SUCCESS,
        meta: {
          requestStatus: RequestResultCases.SUCCESS,
        },
      };
      const nextState: ErrorsState = errors(errorsStateWithSomeErrors, action);
      expect(nextState).toEqual(errorsStateWithEmptyErrors);
    });
  });

  describe('request failure', () => {
    it('adds in domains of failed requests', () => {
      const action: FSA = {
        type: actionBar + RequestResultCases.FAILURE,
        meta: {
          requestStatus: RequestResultCases.FAILURE,
        },
        payload: {
          response: {
            data: errorPayload,
          },
        },
      };
      const nextState: ErrorsState = errors(errorsStateWithEmptyErrors, action);
      expect(nextState).toEqual(errorsStateWithSomeErrors);
    });
  });
});
