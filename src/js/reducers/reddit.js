// @flow
import type { FSA } from 'redux';

import { FETCH_REDDITS } from 'actions/reddit';
import * as RequestResultCases from 'middlewares/requests-middleware';

export type RedditThread = {
  id: string,
  title: string,
  permalink: string,
};
export type RedditState = Array<{
  data: RedditThread,
  kind: string,
}>;
export const defaultRedditState: RedditState = [];

function reddit(state: RedditState = defaultRedditState, action: FSA) {
  switch (action.type) {
    case FETCH_REDDITS + RequestResultCases.SUCCESS:
      return action.payload.data.children;
    default:
      return state;
  }
}

export default reddit;
