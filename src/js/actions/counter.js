// @flow
import type { FSA } from 'types/redux';

export const INCREMENT = 'INCREMENT';
export function increment(): FSA {
  return {
    type: INCREMENT,
    payload: null,
  };
}

export const DECREMENT = 'DECREMENT';
export function decrement(): FSA {
  return {
    type: DECREMENT,
    payload: null,
  };
}
