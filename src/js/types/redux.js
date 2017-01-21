// @flow

// Flux Standard Action: https://github.com/acdlite/flux-standard-action
export type FSA = {
  type: string,
  payload?: any,
  meta?: any,
  error?: boolean,
};

export type RequestStates = {
  isPending: boolean,
  isSuccessful: boolean,
  isFailure: boolean,
};
