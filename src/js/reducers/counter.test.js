import type { FSA } from 'types/redux';

import counter, { defaultState } from './counter';
import * as counterActions from 'actions/counter';

describe('counter reducer', () => {
  it('return the initial state', () => {
    const action: FSA = {
      type: 'FOO_BAR',
    };
    const nextState = counter(undefined, action);
    expect(nextState).toEqual(defaultState);
  });

  it('should handle INCREMENT', () => {
    const action: FSA = {
      type: counterActions.INCREMENT,
    };

    const nextState = counter(undefined, action);
    expect(nextState).toEqual(1);

    const nextState2 = counter(nextState, action);
    expect(nextState2).toEqual(2);
  });

  it('should handle DECREMENT', () => {
    const action: FSA = {
      type: counterActions.DECREMENT,
    };

    const nextState = counter(undefined, action);
    expect(nextState).toEqual(-1);

    const nextState2 = counter(nextState, action);
    expect(nextState2).toEqual(-2);
  });

  it('should handle INCREMENT and DECREMENT in succession', () => {
    const incrementAction: FSA = {
      type: 'INCREMENT',
    };
    const decrementAction: FSA = {
      type: 'DECREMENT',
    };

    const nextState = counter(undefined, incrementAction);
    expect(nextState).toEqual(1);

    const nextState2 = counter(nextState, decrementAction);
    expect(nextState2).toEqual(0);

    const nextState3 = counter(nextState2, decrementAction);
    expect(nextState3).toEqual(-1);

    const nextState4 = counter(nextState3, incrementAction);
    expect(nextState4).toEqual(0);
  });
});
