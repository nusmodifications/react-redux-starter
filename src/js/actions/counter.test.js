import type { FSA } from 'types/redux';

import * as actions from 'actions/counter';

describe('counter actions', () => {
  it('should create an action to increment', () => {
    const action: FSA = actions.increment();
    const expectedAction = {
      type: actions.INCREMENT,
      payload: null,
    };
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to decrement', () => {
    const action: FSA = actions.decrement();
    const expectedAction = {
      type: actions.DECREMENT,
      payload: null,
    };
    expect(action).toEqual(expectedAction);
  });
});
