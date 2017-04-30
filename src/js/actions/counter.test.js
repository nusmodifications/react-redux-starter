import type { FSA } from 'types/redux';

import * as actions from 'actions/counter';

describe('counter actions', () => {
  it('should create an action to increment', () => {
    const action: FSA = actions.increment();
    expect(action).toMatchSnapshot();
  });

  it('should create an action to decrement', () => {
    const action: FSA = actions.decrement();
    expect(action).toMatchSnapshot();
  });
});
