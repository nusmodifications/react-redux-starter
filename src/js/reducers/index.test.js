// @flow
import type { FSA } from 'types/redux';

import rootReducer from 'reducers';

describe('rootReducer', () => {
  it('has all the child reducers', () => {
    const initialState = {};
    const dummyAction: FSA = {
      type: 'DUMMY_ACTION',
      payload: null,
    };
    const state = rootReducer(initialState, dummyAction);
    expect(state).toMatchSnapshot();
  });
});
