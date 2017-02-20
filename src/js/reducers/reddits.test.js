import type { FSA } from 'types/redux';

import reddits, { defaultRedditsState } from 'reducers/reddits';
import * as redditsActions from 'actions/reddits';
import * as RequestResultCases from 'middlewares/requests-middleware';

describe('reddits reducer', () => {
  it('return the initial state', () => {
    const action: FSA = {
      type: 'FOO_BAR',
    };
    const nextState = reddits(undefined, action);
    expect(nextState).toEqual(defaultRedditsState);
  });

  it('should handle INCREMENT', () => {
    const data = [
      { data: { id: 1, title: 'Foo' } },
      { data: { id: 2, title: 'Bar' } },
    ];
    const action: FSA = {
      type: redditsActions.FETCH_REDDITS + RequestResultCases.SUCCESS,
      payload: {
        data: {
          children: data,
        },
      },
    };

    const nextState = reddits(defaultRedditsState, action);
    expect(nextState).toEqual(data);
  });
});
