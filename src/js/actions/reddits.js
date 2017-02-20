// @flow
import type { FSA } from 'types/redux';
import { API_REQUEST } from 'middlewares/requests-middleware';

export const FETCH_REDDITS: string = 'FETCH_REDDITS';
export function fetchReddits(topic: string): FSA {
  return {
    type: FETCH_REDDITS,
    payload: {
      method: 'GET',
      url: `https://www.reddit.com/r/${topic}.json`,
    },
    meta: {
      [API_REQUEST]: true,
    },
  };
}
