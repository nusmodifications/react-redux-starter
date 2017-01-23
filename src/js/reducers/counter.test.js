import type { FSA } from 'types/redux';

import counter, { defaultCounterState } from 'reducers/counter';
import * as counterActions from 'actions/counter';

describe('counter reducer', () => {
  it('return the initial state', () => {
    const action: FSA = {
      type: 'FOO_BAR',
    };
    const nextState = counter(undefined, action);
    expect(nextState).toEqual(defaultCounterState);
  });

  it('should handle INCREMENT', () => {
    const action: FSA = counterActions.increment();

    const nextState = counter(undefined, action);
    expect(nextState).toEqual(1);

    const nextState2 = counter(nextState, action);
    expect(nextState2).toEqual(2);
  });

  it('should handle DECREMENT', () => {
    const action: FSA = counterActions.decrement();

    const nextState = counter(undefined, action);
    expect(nextState).toEqual(-1);

    const nextState2 = counter(nextState, action);
    expect(nextState2).toEqual(-2);
  });

  it('should handle INCREMENT and DECREMENT in succession', () => {
    const incrementAction: FSA = counterActions.increment();
    const decrementAction: FSA = counterActions.decrement();

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
