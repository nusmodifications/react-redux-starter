// @flow
import type { FSA } from 'types/redux';

import _ from 'lodash';

import * as ActionTypes from 'actions/helpers';
import * as RequestResultTypes from 'middlewares/requests-middleware';

export type ErrorsState = {};
export const defaultErrorsState: ErrorsState = {};

export default function errors(state: ErrorsState = defaultErrorsState, action: FSA): ErrorsState {
  const { type, payload, meta } = action;

  // Reset all state
  if (type === ActionTypes.RESET_ALL_STATE) {
    return defaultErrorsState;
  }

  // Reset error state
  if (type === ActionTypes.RESET_ERROR_STATE) {
    const newState = {};
    _.each(action.payload, (domain) => {
      newState[domain] = {};
    });

    return {
      ...state,
      ...newState,
    };
  }

  if (meta && meta.requestStatus && meta.requestStatus === RequestResultTypes.SUCCESS) {
    const domain = _.camelCase(type.replace(RequestResultTypes.SUCCESS, ''));
    return _.omit(state, domain);
  }

  // Display api request errors
  if (meta && meta.requestStatus && meta.requestStatus === RequestResultTypes.FAILURE) {
    const domain = _.camelCase(type.replace(RequestResultTypes.FAILURE, ''));
    if (!payload || !payload.response) {
      return state;
    }
    return {
      ...state,
      [domain]: payload.response.data || {},
    };
  }

  return state;
}
