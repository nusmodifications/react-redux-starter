// @flow
import type { RequestStates } from 'types/redux';

export const requestStateInitial: RequestStates = {
  isPending: false,
  isFailure: false,
  isSuccessful: false,
};

export const requestStatePending: RequestStates = {
  isPending: true,
  isFailure: false,
  isSuccessful: false,
};

export const requestStateFailure: RequestStates = {
  isPending: false,
  isFailure: true,
  isSuccessful: false,
};

export const requestStateSuccessful: RequestStates = {
  isPending: false,
  isFailure: false,
  isSuccessful: true,
};
