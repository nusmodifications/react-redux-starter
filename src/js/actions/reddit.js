// @flow

import { API_REQUEST } from 'middlewares/requests-middleware';

export const FETCH_REDDITS: string = 'FETCH_REDDITS';
export function fetchReddits(topic: string): Function {
  return (dispatch: Function) => dispatch({
    [API_REQUEST]: {
      type: FETCH_REDDITS,
      payload: {
        method: 'GET',
        url: `https://www.reddit.com/r/${topic}.json`,
      },
    },
  });
}
