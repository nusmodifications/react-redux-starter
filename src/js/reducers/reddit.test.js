import type { FSA } from 'types/redux';

import reddit, { defaultRedditState } from 'reducers/reddit';
import * as redditActions from 'actions/reddit';
import * as RequestResultCases from 'middlewares/requests-middleware';

describe('reddit reducer', () => {
  it('return the initial state', () => {
    const action: FSA = {
      type: 'FOO_BAR',
    };
    const nextState = reddit(undefined, action);
    expect(nextState).toEqual(defaultRedditState);
  });

  it('should handle INCREMENT', () => {
    const data = [
      { data: { id: 1, title: 'Foo' } },
      { data: { id: 2, title: 'Bar' } },
    ];
    const action: FSA = {
      type: redditActions.FETCH_REDDITS + RequestResultCases.SUCCESS,
      payload: {
        data: {
          children: data,
        },
      },
    };

    const nextState = reddit(defaultRedditState, action);
    expect(nextState).toEqual(data);
  });
});
