// @flow
import type { FSA } from 'types/redux';

import _ from 'lodash';

import { RESET_ALL_STATE, RESET_REQUEST_STATE } from 'actions/helpers';
import * as RequestResultTypes from 'middlewares/requests-middleware';

export type RequestsState = {};
export const requestStateSuffix = 'Request';

export function defaultRequestsState(): RequestsState {
  return {};
}

export default function requests(state: RequestsState = defaultRequestsState(),
  action: FSA): RequestsState {
  const { type, meta } = action;

  if (type === RESET_ALL_STATE) {
    return defaultRequestsState();
  }

  // Reset individual request state.
  if (type === RESET_REQUEST_STATE) {
    const newState = {};
    _.each(action.payload, (domain) => {
      newState[_.camelCase(domain) + requestStateSuffix] = {
        isPending: false,
        isSuccessful: false,
        isFailure: false,
      };
    });

    return {
      ...state,
      ...newState,
    };
  }

  if (!meta) {
    return state;
  }

  const requestStatus = meta.requestStatus;
  // requestStatus is a field specially designed and owned by api request actions.
  let domain = '';
  switch (requestStatus) {
    case RequestResultTypes.REQUEST:
      domain = _.camelCase(type.replace(RequestResultTypes.REQUEST, ''));
      return {
        ...state,
        [domain + requestStateSuffix]: {
          isPending: true,
          isSuccessful: false,
          isFailure: false,
        },
      };
    case RequestResultTypes.SUCCESS:
      domain = _.camelCase(type.replace(RequestResultTypes.SUCCESS, ''));
      return {
        ...state,
        [domain + requestStateSuffix]: {
          isPending: false,
          isSuccessful: true,
          isFailure: false,
        },
      };
    case RequestResultTypes.FAILURE:
      domain = _.camelCase(type.replace(RequestResultTypes.FAILURE, ''));
      return {
        ...state,
        [domain + requestStateSuffix]: {
          isPending: false,
          isSuccessful: false,
          isFailure: true,
        },
      };
    default:
      return state;
  }
}
