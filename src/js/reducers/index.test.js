import type { FSA } from 'types/redux';

import rootReducer from 'reducers';
import _ from 'lodash';

describe('rootReducer', () => {
  it('has all the child reducers', () => {
    const initialState = {};
    const dummyAction: FSA = {
      type: 'DUMMY_ACTION',
    };
    const state = rootReducer(initialState, dummyAction);
    expect(state).toMatchSnapshot();
  });
});
