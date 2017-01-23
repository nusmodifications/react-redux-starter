// @flow
import type { FSA } from 'redux';

import { INCREMENT, DECREMENT } from 'actions/counter';

export type CounterState = number;
export const defaultCounterState: CounterState = 0;

function counter(state: CounterState = defaultCounterState, action: FSA): CounterState {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
