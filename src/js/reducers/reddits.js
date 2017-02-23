// @flow
import type { FSA } from 'types/redux';

import { FETCH_REDDITS } from 'actions/reddits';
import * as RequestResultCases from 'middlewares/requests-middleware';

export type RedditsThread = {
  id: string,
  title: string,
  permalink: string,
};
export type RedditsState = Array<{
  data: RedditsThread,
  kind: string,
}>;
export const defaultRedditsState: RedditsState = [];

function reddits(state: RedditsState = defaultRedditsState, action: FSA) {
  switch (action.type) {
    case FETCH_REDDITS + RequestResultCases.SUCCESS:
      return action.payload.data.children;
    default:
      return state;
  }
}

export default reddits;
